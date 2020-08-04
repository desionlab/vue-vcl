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
      default: 'border',
      validator(value) {
        return ['border', 'grow'].indexOf(value) !== -1;
      }
    },
    variant: {
      type: String,
      default: 'primary',
      validator(value) {
        return (
          [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark'
          ].indexOf(value) !== -1
        );
      }
    },
    small: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    }
  },
  computed: {
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
