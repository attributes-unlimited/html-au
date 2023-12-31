import { eventSetupArgs } from "../../types.js";

const hostT = ['au-target', 'au-include'];

export const auHostImpl = (esa: eventSetupArgs, piArgs) => {
  const {ele, initialMeta} = esa;
  const auHost = ele.getAttribute('au-host');
  if (auHost !== null && auHost.length > 1) {
    hostT.forEach(att => {
      if (ele.getAttribute(att) === "host") {
        ele.setAttribute(att, auHost);
        initialMeta.brains.push(`replaced ${att} with the value from au-host`);
      }
    })
  }
}