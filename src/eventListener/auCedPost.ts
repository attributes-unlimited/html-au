import { pluginArgs } from "src/types.js";
import { getIncludeElement } from "./parseAuTarget.js";
import { makeFormData } from "./auFormData.js";
import { isAuServer } from "./auServerDSL.js";

export function auCedPost(pia: pluginArgs) {
  const { auMeta, ele, cedEle } = pia;
  // not sure this is any different for get or post
  if (!(auMeta.auCed.verb === 'post' && !isAuServer(auMeta))) { return }

  const formDataEle = getIncludeElement(ele, auMeta)
  // note: user gets to decide which format by what they put in their componet
  const fd = makeFormData(formDataEle, ele)

  // todo: mabe the body or model property names configurable. An existing app may use model already and want to use auModel or other.
  // strategy: to just attach the data that is requested. Might be overkill and should just attach both regardless.
  const hasBody = cedEle.hasOwnProperty('body')
  const hasModel = cedEle.hasOwnProperty('model')
  if (hasBody) {
    if (cedEle.body === undefined) {
      cedEle.body = new FormData()
    }
    for (const [key, val] of fd.entries()) {
      (cedEle.body as FormData).set(key, val);
    }
  }
  if (hasModel) {
    if (cedEle.model === undefined) {
      cedEle.model = {}
    }
    for (const [key, val] of fd.entries()) {
      cedEle.model[key] = val;
    }
  }
  if (!hasBody && !hasModel) {
    throw new Error('Using attribute au-ced="post ..." without a property of body or model on the target component. Either add body or model to the component, or remove the post hint.')
  }

}