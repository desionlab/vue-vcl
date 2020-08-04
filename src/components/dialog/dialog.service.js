/**
 * dialog.service.js
 *
 * @author    Desionlab <support@desionlab.net>
 * @copyright 2018 - 2020 Desionlab
 * @license   MIT
 */

import { v1 as uuid } from 'uuid';

/**
 *
 */
export class DialogInstant {
  /**
   * Dialog instant constructor.
   *
   * @param {*} component
   * @param {*} context
   * @param {*} modal
   */
  constructor(component, context = {}, modal = false) {
    this.id = uuid();
    this.component = component;
    this.context = context;
    this.modal = modal;
  }

  /**
   *
   */
  close(data = null) {
    return data;
  }
}

/**
 *
 */
export class DialogService {
  /**
   * Dialog service constructor.
   *
   * @param { Vue } context
   * @param { Vue } eventBus$ Event bus service.
   */
  constructor(context, eventBus) {
    /* EventEmitter object. */
    this.$eventBus = eventBus;

    /* Dialog list. */
    this.$vm = new context({ data: { items: [] } });
  }

  /**
   *
   */
  get items() {
    return this.$vm.items;
  }

  /**
   *
   */
  open(component, context = {}, modal = false) {
    return new Promise((resolve) => {
      /*  */
      const item = new DialogInstant(component, context, modal);

      /*  */
      this.items.push(item);

      /*  */
      item.close = (data) => {
        resolve(data);
      };
    });
  }
}
