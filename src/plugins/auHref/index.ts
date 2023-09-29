import { pluginDefinition } from "src/types.js";
import { auHref } from "./auHref.js";

export const auHrefPlugin = {
  name:'auHref',
  endEventCallback: {
    when:'end',
    callback: auHref,
    args:{
      _window: window
    }
  }
} as pluginDefinition