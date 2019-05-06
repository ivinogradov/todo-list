import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-input/paper-input';
import '@polymer/polymer/lib/elements/dom-repeat'

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
        .task {
          display: flex;
          align-items: center;
        }
        paper-input: {
          display: inline-block;
        }
      </style>
      <h2>[[name]]</h2>
      <dive class="todo-list">

        <dom-repeat
          items={{tasks}}
          as="task"
          filter="isNotDone"
          observe="done">

          <template>
            <div class="task">
              <paper-checkbox checked="{{task.done}}"></paper-checkbox>
              <paper-input label="Task:" value="{{task.task}}"></paper-input>
            </div>
          </template>
        </dom-repeat>

        <paper-button on-click="addTask">Add Task</paper-button>

        <h4>[[sub]]</h4>

        <dom-repeat
          items={{tasks}}
          as="task"
          filter="isDone"
          observe="done">

          <template>
            <div class="task">
              <paper-checkbox checked="{{task.done}}"></paper-checkbox>
              <paper-input label="Task:" value="{{task.task}}"></paper-input>
            </div>
          </template>
        </dom-repeat>
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
      },
      tasks: {
        type: Array,
        value: () => [{ done: false, task: 'Add a task'}]
      }
    };
  }

  addTask() {
    var oTask = {
      done: false,
      task: ''
    };
    this.push('tasks', oTask);
  }

  isNotDone(oTask) {
    return !oTask.done;
  }

  isDone(oTask) {
    return oTask.done;
  }
}

window.customElements.define('todo-element', TodoElement);
