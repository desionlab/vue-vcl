/**
 * toast.mixin.js
 *
 * @author    Desionlab <support@desionlab.net>
 * @copyright 2018 - 2020 Desionlab
 * @license   MIT
 */

import componentMixin from '../component.mixin';

export default {
  mixins: [componentMixin],
  props: {
    /* Time display notifications, if 0 is always displayed. */
    timeout: {
      type: Number,
      default: 0
    },
    /* Variant display component. */
    variant: {
      type: String,
      default: null
    },
    /* Infographic icon. */
    icon: {
      default: null
    },
    /* The main message header. */
    title: {
      type: String,
      default: null
    },
    /* Auxiliary message header. */
    subTitle: {
      type: String,
      default: null
    },
    /* The main message. */
    message: {
      type: String,
      default: null
    },
    /* Flag display progress indicator. */
    loading: {
      type: Boolean,
      default: false
    },
    /* Value to display the progress bar. */
    progress: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      /*  */
      timer: null
    };
  },
  methods: {
    /*  */
    onClose() {
      this.$emit('close', this.id);
    },
    /*  */
    onTimer() {}
  }
};
