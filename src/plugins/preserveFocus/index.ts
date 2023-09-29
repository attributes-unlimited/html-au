import { pluginDefinition } from "src/types.js";
import { preserveFocus } from "./preserveFocus.js";

export const preserveFocusPlugin = {
  name:'preserveFocus',
  // preflight: setCurrentValue,
  endEventCallback:{
    when:'end',
    callback: preserveFocus,
    args:undefined
  }
} as pluginDefinition