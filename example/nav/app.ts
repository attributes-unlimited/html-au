import { auObserver, createElement, defaultConfig, defineElement, html } from "../../src";
import { HelloWorldDiv } from '../basic/helloWorld.js';
import './activeNav.js'
defineElement('hello-msg', HelloWorldDiv,'div')

auObserver(document.body, defaultConfig);

const layout = html`
  <div>
    <h1>Active Nav Example</h1>
    <p>Demonstrates updating two components with one user click. Leverages event bubbling.
       Clicking on a left nav item renders a component in the main area, and re-renders 
       the nav with the selected item having the class active.
    </p>
    <p>Note: this solution is a POC and in this case, it is recommended to not use html-au and use a single event listener in the active-nav component.</p>
    <p>Important implementation note: Because we have two elements with click events, the other element must hug the inner element so the user cannot accidentally click on the outer element.
      The innermost element should set the size for the li element.
      If needed for styling purposes, a new span under the li may be needed. Move the au-attributes to that span.
    </p>
    </div>
  <div id="content">
    <span><active-nav></active-nav></span>
    <span><main></main></span>
  </div>
`
document.body.append(layout)
  