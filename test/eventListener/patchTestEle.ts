import { html } from "../../src";

export const PATCH_TEST = 'patch-test';
export class PatchTest extends HTMLElement {
  body: FormData
  model = {
    color: '',
    keeper: '',
    counter: '0'
  }

  constructor() {
    super();
    this.model.counter = '0'
    this.body = new FormData()
  }

  async connectedCallback() {
    const previousCounter = Number(this.model.counter);
    const frag = html`
      <input type="text" name="color" value="${this.model.color}"/>
      <input type="text" name="sound" value="${this.body?.get('sound')?.toString() ?? ''}"/>
      <input type="number" name="counter" value="${(previousCounter + 1).toString()}" />
      <button
        au-trigger="click"
        au-host="closest ${PATCH_TEST}"
        au-include="host"
        au-ced="patch"
        au-target="host">click</button>
    `
    this.replaceChildren()
    this.append(frag);
  }
}