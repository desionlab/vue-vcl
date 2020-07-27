/**
 * toasts.service.js
 *
 * @author    Desionlab <support@desionlab.net>
 * @copyright 2018 - 2020 Desionlab
 * @license   MIT
 */

import Vue from 'vue';
import { v1 as uuid } from 'uuid';
import { cloneDeep, merge } from 'lodash';

/*  */
export const ToastsDefaultOptions = {
  /* Unique identificator. */
  id: null,
  /* Time display notifications, if 0 is always displayed. */
  timeout: 0,
  /* Variant display component. */
  variant: null,
  /* Infographic icon. */
  icon: null,
  /* The main message header. */
  title: '',
  /* Auxiliary message header. */
  subTitle: null,
  /* The main message. */
  message: null,
  /* Flag display progress indicator. */
  loading: false,
  /* Value to display the progress bar. */
  progress: null,
  /*  */
  component: 'VclToast'
};

/*  */
export const ToastsServiceDefaultOptions = {
  /*  */
  icons: {
    simple: null,
    success: null,
    error: null,
    info: null,
    warning: null,
    confirm: null
  },
  /*  */
  align: {
    /* top, bottom */
    vertical: 'top',
    /* left, right */
    horizontal: 'right'
  },
  /*  */
  offset: {
    /* In pixel. */
    vertical: 20,
    /* In pixel. */
    horizontal: 20
  }
};

/**
 *
 */
export class ToastService {
  /**
   * Toasts service constructor.
   *
   * @param { Vue } context
   * @param { Vue } eventBus$ Event bus service.
   * @param { ToastsServiceDefaultOptions } options
   */
  constructor(context, eventBus) {
    /* EventEmitter object. */
    this.$eventBus = eventBus;

    /* Toast list. */
    this.$items = new context({ data: { items: [] } }).$data.items;
  }

  get items() {
    return this.$items;
  }

  add(options) {
    /* Set toast options. */
    let toast = merge(cloneDeep(ToastsDefaultOptions), options);

    /* Check toast id. */
    if (!toast.id) toast.id = uuid();

    /* Send event to view. */
    this.items.push(toast);

    /* Return toast object. */
    return toast;
  }
}
