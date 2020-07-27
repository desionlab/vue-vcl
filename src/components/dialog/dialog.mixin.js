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
  props: {},
  data() {
    return {};
  },
  methods: {
    /*  */
    onClose() {
      this.$emit('close', this.id);
    }
  }
};
