/**
 * enhanceApp.js
 *
 * @author    Desionlab <support@desionlab.net>
 * @copyright 2018 - 2020 Desionlab
 * @license   MIT
 */

import VueVCL from '../../src';
import 'bootstrap/scss/bootstrap.scss';
import {
  localize,
  configure,
  ValidationObserver,
  ValidationProvider
} from 'vee-validate/dist/vee-validate.full';

function loadLocale(code) {
  return import(`vee-validate/dist/locale/${code}.json`).then((locale) => {
    localize(code, locale);
  });
}

const config = {
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  },
  bails: true,
  skipOptional: true,
  mode: 'aggressive',
  useConstraintAttrs: true
};

export default ({ Vue, options, router, siteData }) => {
  /*  */
  // loadLocale('ru');

  /*  */
  configure(config);

  /*  */
  Vue.component('ValidationObserver', ValidationObserver);
  Vue.component('ValidationProvider', ValidationProvider);

  /*  */
  Vue.use(VueVCL, {});
};
