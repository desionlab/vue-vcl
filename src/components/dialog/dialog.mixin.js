/**
 * dialog.mixin.js
 *
 * @author    Desionlab <support@desionlab.net>
 * @copyright 2018 - 2020 Desionlab
 * @license   MIT
 */

import componentMixin from '../component.mixin';

export default {
  mixins: [componentMixin],
  props: {
    context: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    /*  */
    close(data = {}) {
      this.$emit('close', data);
    },
    /*  */
    backdrop() {
      this.$emit('backdrop');
    }
  }
};
