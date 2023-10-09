import { pluginDefinition } from "src/types.js";
import { auHash } from "./auHash.js";


export const auHashPlugin = {
  name:'auHash',
  endEventCallback: {
    when:'end',
    callback: auHash,
    args:{
      _window: window
    }
  }
} as pluginDefinition