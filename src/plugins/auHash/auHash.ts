import { pluginArgs } from "../../types.js";

export async function auHash(plugIn: Partial<pluginArgs>, args) {
  const auHash = plugIn.ele.getAttribute('au-hash')
  if (auHash === null) { return null}
  let hash = auHash
  if(auHash === 'use au-ced'){
    // todo:might want to whitelist or sanitize the tagname
    hash = `#${plugIn.auMeta.auCed.tagName}?${plugIn.auMeta.auCed.qs}`
  }
  // todo: this could be more sophisticated and use window.history.pushState
  args._window.location.hash = hash
  return hash
}
