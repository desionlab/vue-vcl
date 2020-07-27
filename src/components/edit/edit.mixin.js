/**
 * edit.mixin.js
 *
 * @author    Desionlab <support@desionlab.net>
 * @copyright 2018 - 2020 Desionlab
 * @license   MIT
 */

import componentMixin from '../component.mixin';

export default {
  mixins: [componentMixin],
  props: {
    /* V-Model. */
    value: {
      default: null
    },
    /*  */
    type: {
      type: String,
      default: 'text'
    },
    /* Data field name. */
    field: {
      type: String,
      default: ''
    },
    /* Field label. */
    label: {
      type: String,
      default: ''
    },
    /* Field placeholder. */
    placeholder: {
      type: String,
      default: null
    },
    /* Hint data. */
    hint: {
      type: String,
      default: null
    },
    /* Help data. */
    help: {
      type: String,
      default: null
    },
    /*  */
    disabled: {
      type: Boolean,
      default: false
    },
    /*  */
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    /*  */
    slots: function () {
      return this.$slots || {};
    },
    /*  */
    charLeft: function () {
      if (this.setup.maxLength) {
        if (this.value) {
          return this.setup.maxLength - this.value.length;
        } else {
          return this.setup.maxLength;
        }
      }

      return '';
    }
  },
  methods: {
    /* On value change callback. */
    onInput: function (event) {
      /* V-Model callback. */
      this.$emit('input', event.target.value);
    }
  }
};
