# Primeagen HTMX Lit Video Reaction

https://www.youtube.com/watch?v=z86ToVPx42Y


## What is html-au
It is a mutation observer that creates eventListeners for you based on attributes on an element.

[MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)

[EventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

[Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements)

- Easy to debug
- importing any html-au functions in your code is optional
- no decorators

Primeagen Dislikes


## Compile Step

No compile step is needed.

Setup is simply importing the library and observing a top level element like document.body.

```js
  <script type="module">
    import { auObserver, defaultConfig} from "node_modules/@attributes-unlimited/html-au/dist/browser/js/index.js";
    import {app} from './app.js'
    // it is preferred to have auObserver observing before adding html to the body. YMMV if you add html then observe
    auObserver(document.body, defaultConfig)
    document.body.append(app);
  </script>
```

If not using a bundler, it is recommended to copy the library out of the node_modules folder and into you webroot. This can be done with a build step.

Improvement opportunity: make observer order not important.

## Decorators
No decorators

[Youtube](https://www.youtube.com/watch?v=z86ToVPx42Y&t=9m25s)


## Debugging

[Youtube](https://www.youtube.com/watch?v=z86ToVPx42Y&t=14m00s)

Nothing special for debugging.
1. look in the console. An effort has been made to export helpful errors.

2. look at the attributes on the live rendered element. In some cases attributes can be ommitted, in these cases, the attribute is added for to the element for easier debugging. When assumptions are made, the assumption decision is available in ele.auMeta.brains string array.

3. Feature overlap between the attributes can be an issue. I'll work on a writing a debugging tree for this. But understanig each attribute is important. Currently there are around five attributes. Trying to keep the attribute limit under 10.

4. Debugging html-au should be faily straight forward if you understand event listeners. Html-au is just converting attributes to an event listener. Discovering au-attributes is an MutationObserver Most of the time the issue is in the mainWorkflow function. Or start right from the auObserver. Preflight plug-ins might be the next common bug area.


## html backticks
[this is the thing I don't want](https://www.youtube.com/watch?v=z86ToVPx42Y&t=24m33s)

Breakdown into the things Primagen doesn't like.

1. Using template literals.
2. Importing a black magic library?

On template literals: The whole goal of HTML-AU is to match an HTMX project in the lines of code written and code complexity. HTML has to be written somewhere. For an existing php project, HTMX makes lots of sense. HTML-AU is more suited to apps that have an existing json data api based project. Or for teams that want to do templating work in JavaScript. Also, if HTML-AU isn't enough, adding event listeners and directly mesing with the dom will not cause issues like they do in vue, angular, and react. The offramp is very easy. Just remove the attributes!

Having an html syntax highlighting IDE plug-in is extremely helpful [es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html)

But what about the html named template literal function? It is just a basic sanitization library that returns a documnet fragment. Any sanitization library can be used, or none at all. I use a linter that looks for .innerHTML to find potential unsafe html. The html function returns a handy documnet fragment that can be queried with .querySelector(':scope placeholder') to attach additional event listeners or to append additional template work like rows generated in a for loop against a different template literal.
[mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

```
  const content = "Hello World"
  //the html function is not necessary
  const frag =  html`<div>${content}</div>
```

Compared to lit, in html-au the backtick is just a simple sanitization library. Any other library can be used.

You can use content security policies if you like. I don't use the built in content security policies because the don't handle svg very well.


## When to know when mounted
[mounted discussion](https://www.youtube.com/watch?v=z86ToVPx42Y&t=25m40s)

html-au doesn't care. That is part of the custom element spec. The function of connectedCallback(){ .... your code}


## Don't want to use Typescript
Do not have to use Typescript. Types are there if you want them.

[Typescript discussion](https://www.youtube.com/watch?v=z86ToVPx42Y&t=28m25s)


## Router
[router discussion](https://www.youtube.com/watch?v=z86ToVPx42Y&t=31m48s)

In a way htmx and html-au act like a router. An element click can put an htmlfragment anywhere on the DOM. 

Can use anchor tags as the element to update the url hash. Don't want to use anchor tags, use the ```au-href``` plug in to make any element act like an anchor tag.

Don't want to deep dive on this now. But can, put an issue on github and I will.

## Timer example in html-au




