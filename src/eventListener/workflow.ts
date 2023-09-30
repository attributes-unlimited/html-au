import { _auObserver } from '../auObserver.js';
import { isAuElement } from '../common.js';
import { getIncludeElement, getTargetEle, replaceAuTarget } from './parseAuTarget.js';
import { auCedEle, auElementType, auMetaType, pluginArgs, workflowArgs } from '../types.js';
import { createElement } from '../utils/index.js';
import { makeFormData } from './auFormData.js';
import { attachServerRespToCedEle, isAuServer } from './auServerDSL.js';
import { getAuMeta } from './auMeta.js';
import { auCedPatchWorkflow } from './auCedPatch.js';
import { auCedPost } from './auCedPost.js';

/**
 * destroy the old event listener so we don't degrade performance
 * if issues, then turn this off.
 * todo: prove this is valuable
 */ 
const removeOldEventListeners = async (ele: Element | DocumentFragment)=> {
  if (ele.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
    Array.from(ele.children).forEach(childEle => { removeOldEventListeners(childEle) })
    return
  }

  if (isAuElement(ele as HTMLElement)) {
    (ele as auElementType).auAbortController.abort()
  }
  Array.from(ele.children).forEach(childEle => { removeOldEventListeners(childEle) })
}

export const mainWorkflow = async (wf: workflowArgs)=> {
  const { ele, initialMeta, auConfig, e } = wf

  const auMeta = await getAuMeta(ele, initialMeta, auConfig)

  // patch has a totally different workflow, this could even move up one level
  if (auMeta.auCed.raw === 'patch') {
    auCedPatchWorkflow(wf, auMeta)
    return;
  }
  const cedEle = createElement<auCedEle>(auMeta.ced)

  const plugInArgs = {
    e,
    auMeta,
    ele,
    cedEle,
    auConfig
  } as pluginArgs

  // attachServerResp is mutually exclusive against update the component with form data
  await attachServerRespToCedEle(plugInArgs)

  auCedPost(plugInArgs)

  cedEle.auMeta = { ...auMeta } // add the metadata for debugging and other edge use cases like maybe they want to parse the au-post query params
  // the observer will decide if it needs to wire up as another auElement
  // todo: validate this is still necessary.
  _auObserver(cedEle, auConfig)

  // todo: clear up the language between the targetElement and the event target element. The event target is what kicks everything off like a button is clicked on. The button is the eventTargetEle. 
  //       the target or targetEle is where we are going to insert the newEle created by CED into the DOM.
  const target = getTargetEle(ele, auMeta.targetSelector)
  plugInArgs.targetEle = target

  const toDispose = replaceAuTarget(plugInArgs)
  wf.auConfig._plugins.atEnd.forEach(pi => pi.endEventCallback.callback(plugInArgs, pi.endEventCallback.args))

  removeOldEventListeners(toDispose)
  // todo: explore destroying other objects that are no longer needed
  return plugInArgs;
}
