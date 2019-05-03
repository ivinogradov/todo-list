import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `todo-element`
 * TODO list in polymer 3
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TodoElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'todo-element',
      },
    };
  }
}

window.customElements.define('todo-element', TodoElement);
