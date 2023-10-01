// defineElement and html are helper classes, they do not need to be used for html-au to work.
import { defineElement, html } from '../../src/index.js'
import { css } from './css.js';
import { TimeDataSvc, timerData } from './store.js';

// url to the post Primeagen was
// reading https://www.bitecode.dev/p/3-irl-use-cases-for-python-and-htmx


const TIMER_TABLE = 'timer-table';
const EDIT_TIMER = 'edit-timer';

function templateLitMain() {
  return html`
  <!-- do not add inline styles like this in a real app -->
    <style>
      ${css}
    </style>
    <div class="timer-container">
      <dialog is="${EDIT_TIMER}"></dialog>
      <div>
        <div class="header">
          <div class="row">
            <span class="cell">Range</span>
            <span class="cell">Time</span>
            <span class="cell">Action</span>
          </div>
        </div>
        <div class="rows row-group"></div>
        <div class="row-group">
          <span class="cell"></span>
          <span class="cell"></span>
          <span class="cell">
            <a
              class="link-like"
              au-trigger="click"
              au-ced="post dialog?is=${EDIT_TIMER}&showmodal&action=add"
              au-target="dialog[is='${EDIT_TIMER}']"
              au-include="closest ${TIMER_TABLE}"
            >Add</a>
          </span>
        </div>
      <div>
      <div class="row-group buttons-container">
        <div class="row" >
          <span class="red cell">-00:00:00</span>
          <span class="green cell">+00:00:00</span>
        </div>
        <!-- todo: wire up these buttons when find out what they do.-->
        <div class="row">
          <span class="cell">
            <button>︾ Consume</button>
          </span>
          <span class="cell">
            <button>︽ Top Up</button>
          </span>
        </div>
      </div>
    </div>
  `
}

function templateLitRow(item) {
  return html`
    <div class="row">
      <span class="cell range">${item.range}</span>
      <span class="cell">${item.time}</span>
      <span class="cell">
        <a class="link-like"
          au-trigger="click"
          au-ced="dialog?is=${EDIT_TIMER}&showmodal&action=edit&id=${item.id}"
          au-target="dialog[is='${EDIT_TIMER}']"
          au-include="closest ${TIMER_TABLE}"
          >Edit</a>
      </span>
    </div>
  `
}

const store = new TimeDataSvc()

export class TimerTable extends HTMLElement {
  model = {
    action: '',
    id: '',
    range: '',
    time: ''
  } as timerData

  connectedCallback() {
    if(this.model.action ==='edit'){
      store.edit(this.model)
    }
    if(this.model.action === 'add'){
      store.add(this.model)
    }
    const frag = templateLitMain()
    const rowsPlaceholder = frag.querySelector(':scope div.rows') as HTMLDivElement

    store.getAll().forEach(item => {
      rowsPlaceholder?.append(templateLitRow(item))
    })
    this.replaceChildren()
    this.append(frag)
  }
}

export class EditTimer extends HTMLDialogElement {
  model = {
    action: '',
    id: '',
    range: '',
    time: ''
  } as timerData

  connectedCallback() {
    if(!this.hasAttribute('showmodal')){return}
    const action = this.getAttribute('action') ?? ''

    if (action.toLowerCase() === 'add') {
      this.model.action = action;
    } else {
      const id = this.getAttribute('id') ?? ''
      if (id === '') { throw new Error('Need to pass in an attribute of id for Edits') }
      this.model = store.getById(id) as timerData
      this.model.action = action;
    }
    this.replaceChildren()
    this.append(this.templateLit())
    this.showModal()
  }

  templateLit() {
    return html`
      <div class="form-group">
        <label for="action">Action</label>
        <input id="action" type="text" name="action" value="${this.model.action?? ''}" readonly/>
      </div>
      <div class="form-group">
          <label for="id">ID</label>
          <input id="id" type="text" name="id" value="${this.model.id}" readonly/>
      </div>
      <div class="form-group">
        <label for="range">Range</label>
        <input id="range" type="text" name="range" value="${this.model.range}"/>
      </div>
      <div class="form-group">
        <label for="time">Time</label>
        <input id="time" type="text" name="time" value="${this.model.time}"/>
      </div>
      <div>
        <label for="button"></label>
        <!-- au-ced="", ced means component element definition, patch means patch the au-include -->
        <button
          au-trigger="click"
          au-ced="patch target"
          au-include="closest dialog[is=${EDIT_TIMER}]"
          au-target="closest ${TIMER_TABLE}"
        >Save</button>
    `
  }
}

defineElement(TIMER_TABLE, TimerTable);
defineElement(EDIT_TIMER, EditTimer, 'dialog')
