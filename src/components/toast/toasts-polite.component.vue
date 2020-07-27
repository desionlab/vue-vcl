<!--
 -- toasts-polite.component.vue
 -->

<style lang="scss"></style>

<template>
  <section
    v-if="$toastService.items.length"
    :class="computedClasses"
    :style="computedStyle"
  >
    <!-- Show notifications. -->
    <component
      v-for="item in $toastService.items"
      v-bind:is="item.component"
      v-bind:key="item.id"
      v-bind="item"
      v-on:close="onToastClose"
    />
  </section>
</template>

<script>
import ComponentMixin from '../component.mixin';

export default {
  name: 'VclToastsPolite',
  mixins: [ComponentMixin],
  props: {},
  data() {
    return {};
  },
  computed: {
    /* Generates a list of css classes. */
    computedClasses() {
      return ['toasts', 'polite'];
    },
    /* Generates container style. */
    computedStyle() {
      let style = {
        position: 'absolute',
        'overflow-x': 'auto'
      };

      style[
        'height'
      ] = `calc(100vh - ${this.$toastService.options.offset.vertical}px)`;

      switch (this.$toastService.options.align.vertical) {
        case 'bottom':
          style['bottom'] = 0;
          style['margin-bottom'] =
            this.$toastService.options.offset.vertical + 'px';
          break;
        case 'top':
          style['top'] = 0;
          style['margin-top'] =
            this.$toastService.options.offset.vertical + 'px';
          break;
      }

      switch (this.$toastService.options.align.horizontal) {
        case 'left':
          style['left'] = 0;
          style['margin-left'] =
            this.$toastService.options.offset.horizontal + 'px';
          break;
        case 'right':
          style['right'] = 0;
          style['margin-right'] =
            this.$toastService.options.offset.horizontal + 'px';
          break;
      }

      return style;
    }
  },
  methods: {
    /*  */
    onToastClose(id) {},
    /*  */
    onClear() {}
  }
};
</script>
