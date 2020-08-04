<!--
 -- dialog-wrapper.component.vue
 -->

<style lang="scss">
.dialog-wrapper {
  &.modal {
    display: block;
    .modal-backdrop {
      z-index: 0;
    }
  }
}
</style>

<template>
  <section class="dialog-wrapper modal">
    <div class="modal-backdrop show" v-on:click="backdrop"></div>
    <div :class="computedClasses">
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VclDialogWrapper',
  props: {
    scrollable: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: null,
      validator(value) {
        return ['xl', 'lg', 'sm'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    computedClasses() {
      const classes = ['modal-dialog'];

      if (this.scrollable) classes.push('modal-dialog-scrollable');
      if (this.centered) classes.push('modal-dialog-centered');
      if (this.size) classes.push(`modal-${this.size}`);

      return classes;
    }
  },
  methods: {
    backdrop() {
      this.$emit('backdrop');
    }
  }
};
</script>
