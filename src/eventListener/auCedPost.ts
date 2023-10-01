import { auElementType, pluginArgs } from "src/types.js";
import { getIncludeElement } from "./parseAuTarget.js";
import { makeFormData } from "./auFormData.js";
import { isAuServer } from "./auServerDSL.js";

export type copyEleDataType = {
  hasModel: boolean
  hasBody: boolean
  cedEle: auElementType
  formDataEle: auElementType
  fd: FormData
}

export const addBodyData = (all: copyEleDataType) => {
  const { hasBody, cedEle, formDataEle, fd } = all
  if (!hasBody) { return }
  cedEle.body = formDataEle.body
  if (cedEle.body === undefined) {
    cedEle.body = new FormData()
  }
  for (const [key, val] of fd.entries()) {
    cedEle.body.set(key, val);
  }
}

export const addModelData = (all) => {
  const { hasModel, cedEle, formDataEle, fd } = all
  if (!hasModel) { return }
  cedEle.model = formDataEle.model
  if (cedEle.model === undefined) {
    cedEle.model = {}
  }
  for (const [key, val] of fd.entries()) {
    cedEle.model[key] = val;
  }
}

export function auCedPost(pia: pluginArgs) {
  const { auMeta, ele, cedEle } = pia;
  // not sure this is any different for get or post
  if (!(auMeta.auCed.verb === 'post' && !isAuServer(auMeta))) { return }
  const formDataEle = getIncludeElement(ele, auMeta) as auElementType
  // note: user gets to decide which format by what they put in
  //       their componet: body for form , model of json, or both body and model
  const fd = makeFormData(formDataEle, ele)

  // todo: mabe the body or model property names configurable. An existing app may use model already and want to use auModel or other.
  const hasBody = cedEle.hasOwnProperty('body')
  const hasModel = cedEle.hasOwnProperty('model')
  const all = { hasModel, hasBody, cedEle, formDataEle, fd } as copyEleDataType
  addBodyData(all)
  addModelData(all)
  if (!hasBody && !hasModel) {
    throw new Error(`Using attribute au-ced="post ..." without a property of body or model on the target component. Either add body or model to the component, or use get instead of post in the au-ced="get ${cedEle.tagName.toLowerCase()}"`)
  }
}