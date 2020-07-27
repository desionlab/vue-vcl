/**
 * index.js
 *
 * @author    Desionlab <support@desionlab.net>
 * @copyright 2018 - 2020 Desionlab
 * @license   MIT
 */

import Vue from 'vue';
import { cloneDeep, merge } from 'lodash';
import Spinner from './components/spinner.component.vue';
/* Toast */
import { ToastService } from './components/toast/toast.service';
import ToastMixin from './components/toast/toast.mixin';
import VclToastsPolite from './components/toast/toasts-polite.component.vue';
/* Edit */
import EditMixin from './components/edit/edit.mixin';
import VclEdit from './components/edit/edit.component.vue';
/* Dialog */
import { DialogService } from './components/dialog/dialog.service';
import DialogMixin from './components/dialog/dialog.mixin';
import VclDialogsPolite from './components/dialog/dialogs-polite.component.vue';

/* Helpers mixin list. */
export { ToastMixin, EditMixin, DialogMixin };

/* Default plugin options. */
export const VclDefaultOptions = {};

/**
 * Vcl plugin object.
 */
const Vcl = {
  /**
   * Install vcl lib.
   *
   * @param { Vue } context
   * @param { VclDefaultOptions } options
   */
  install(context, options = {}) {
    /* Set plugin options. */
    options = merge(cloneDeep(VclDefaultOptions), options);

    /* Register "Event bus" service. */
    context.prototype.$eventBus = new Vue();

    /* Register "Base" components. */
    context.component(Spinner.name, Spinner);

    /*  */
    context.component(VclEdit.name, VclEdit);

    /* Register "Toasts" service. */
    context.prototype.$toastService = new ToastService(
      context,
      context.prototype.$eventBus
    );
    context.component(VclToastsPolite.name, VclToastsPolite);

    /* Register "Dialog" service. */
    context.prototype.$dialogService = new DialogService(
      context,
      context.prototype.$eventBus
    );
    context.component(VclDialogsPolite.name, VclDialogsPolite);
  }
};

/* Export plugin object. */
export default Vcl;

/* Automatic installation if Vue has been added to the global scope. */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vcl);
}
