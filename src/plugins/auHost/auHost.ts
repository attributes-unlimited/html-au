import { eventSetupArgs } from "../../types.js";

export const auHostImpl = (esa: eventSetupArgs, piArgs) => {
  const {ele, initialMeta} = esa;
  const auHost = ele.getAttribute('au-host');
  if (auHost !== null && auHost.length > 1) {
    const hostT = ['au-target', 'au-include', 'au-ced'];
    hostT.forEach(att => {
      if (ele.getAttribute(att) === "host") {
        ele.setAttribute(att, auHost);
        initialMeta.brains.push(`replaced ${att} with the value from au-host`);
      }
    })
  }
}