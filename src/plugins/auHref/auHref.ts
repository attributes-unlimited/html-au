import { pluginArgs } from "../../types.js";

/**
 * use au-hash for now.
 * au-href could be so much more and do not want to have breaking changes later
 */
export async function auHref(plugIn: Partial<pluginArgs>, args) {
  const auHref = plugIn.ele.getAttribute('au-href')
  if (auHref === null) { return null}
  let hash = auHref
  if(auHref === 'use au-ced'){
    // todo:might want to whitelist or sanitize the tagname
    hash = `#${plugIn.auMeta.auCed.tagName}?${plugIn.auMeta.auCed.qs}`
  }
  // todo: this could be more sophisticated and use window.history.pushState
  args._window.location.hash = hash
  console.warn("Please use au-hash, instead of au-href. This au-href will have breaking changes in the future.")
  return hash
}
