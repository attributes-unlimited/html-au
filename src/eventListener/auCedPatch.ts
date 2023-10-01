import { auMetaType, auElementType, workflowArgs } from "../types.js"
import { makeFormData } from "./auFormData.js"
import { getIncludeElement, getTargetEle } from "./parseAuTarget.js"

/**
 * when au-ced="post" this is a special short circuit where we do not recreate the element.
 * we instead attach the form data then call connectedCallback.
 * Note: there is work related to this in the parseAuCed function
 * Form input trigger example:
 * 
 *  <form au-trigger="input" au-ced="patch">...</form>
 * 
 * Button in a form example:
 *  <button
 *      au-trigger="click"
 *      au-host="closest form"
 *      au-include="host"
 *      au-ced="patch"
 *      au-target="host">click</button>
 * 
 */
export const auCedPatchWorkflow = (wf:workflowArgs, auMeta:auMetaType) => {
  const { ele } = wf

  const includedEle = auMeta.auInclude === null ? ele : getIncludeElement(ele, auMeta) as auElementType
  // note: user gets to decide which format by what they put in their componet
  const fd = makeFormData(includedEle, ele)

  const target = auMeta.auCed.raw === 'patch target' ? getTargetEle(ele, auMeta.targetSelector) as auElementType: includedEle;
  const hasBody = target.hasOwnProperty('body')
  const hasModel = target.hasOwnProperty('model')
  if (hasBody) {
    if (hasBody === undefined) {
      target.body = fd;
    } else {
      for (const [key, val] of fd.entries()) {
        target.body.set(key, val)
      }
    }
  }
  if (hasModel) {
    // update or patch the model
    if(target.model === undefined){
      target.model = {}
    }
    for (const [key, val] of fd.entries()) {
      target.model[key] = val;
    }
  }
  if (!hasBody && !hasModel) {
    throw new Error('Using attribute au-ced="patch" the element or the included element needs a property of body or model.')
  }

  if(auMeta.auCed.raw === 'patch target'){
    // todo: throw a helpful error if the target is not a custom element.
    target?.connectedCallback()
    return;
  }
  //note: thought about clearing the children here, but decided to leave that control to the component
  includedEle.connectedCallback();

  //todo: should run the post plugins
}
