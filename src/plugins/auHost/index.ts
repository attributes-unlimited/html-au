import { pluginDefinition } from "src/types.js";
import { auHostImpl } from "./auHost";

export const auHostPlugIn = {
  name:'auHost',
  preflight: auHostImpl
} as pluginDefinition