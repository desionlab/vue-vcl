<!--
 -- spinner.component.vue
 -->

<style lang="scss"></style>

<template>
  <div :class="computedClasses">
    <slot>
      <span v-if="label" class="sr-only">{{ label }}</span>
    </slot>
  </div>
</template>

<script>
import Component from './component.mixin';

export default {
  name: 'VclSpinner',
  mixins: [Component],
  props: {
    type: {
      type: String,
      default: 'border'
    },
    label: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: 'primary'
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    /* Generates a list of css classes. */
    computedClasses() {
      const classes = [];

      if (this.$props.type) classes.push(`spinner-${this.$props.type}`);
      if (this.$props.small) classes.push(`spinner-${this.$props.type}-sm`);
      if (this.$props.variant) classes.push(`text-${this.$props.variant}`);

      return classes;
    }
  }
};
</script>
