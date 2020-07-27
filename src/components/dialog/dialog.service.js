/**
 * dialog.service.js
 *
 * @author    Desionlab <support@desionlab.net>
 * @copyright 2018 - 2020 Desionlab
 * @license   MIT
 */

import { cloneDeep, merge } from 'lodash';

/*  */
export const DialogServiceDefaultOptions = {};

/**
 *
 */
export class DialogService {
  /**
   * Dialog service constructor.
   *
   * @param { Vue } context
   * @param { Vue } eventBus$ Event bus service.
   * @param { DialogServiceDefaultOptions } options
   */
  constructor(context, eventBus) {
    /* EventEmitter object. */
    this.$eventBus = eventBus;

    /* Dialog list. */
    this.$items = new context({ data: { items: [] } }).$data.items;
  }

  get items() {
    return this.$items;
  }

  open(component, options = {}) {}
}
