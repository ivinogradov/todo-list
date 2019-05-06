import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-input/paper-input';

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
      <h2>[[name]]</h2>
      <dive class="todo-list">
        <div class="task">
          <paper-checkbox></paper-checkbox>
          <paper-input label="Task:"></paper-input>
        </div>

        <paper-button>Add Task</paper-button>

        <h4>[[sub]]</h4>
      </div>
    `;
  }
  static get properties() {
    return {
      name: {
        type: String,
        value: 'Todo list',
      },
      sub: {
        type: String,
        value: 'Completed:'
      }
    };
  }
}

window.customElements.define('todo-element', TodoElement);
