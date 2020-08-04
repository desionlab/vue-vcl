<!--
 -- dialog-polite.component.vue
 -->

<style lang="scss"></style>

<template>
  <section v-if="$dialogService.items.length" :class="computedClasses">
    <component
      v-for="(item, key) in $dialogService.items"
      v-bind:id="item.id"
      v-bind:key="item.id"
      v-bind:context="item.context"
      v-bind:is="item.component"
      v-on:close="
        (data) => {
          onDialogClose(key, data);
        }
      "
      v-on:backdrop="onDialogBackdrop(key)"
    />
  </section>
</template>

<script>
import ComponentMixin from '../component.mixin';

export default {
  name: 'VclDialogsPolite',
  mixins: [ComponentMixin],
  computed: {
    computedClasses() {
      return ['dialogs', 'polite'];
    }
  },
  methods: {
    onDialogClose(key, data = null) {
      const items = this.$dialogService.items.splice(key, 1);
      if (items.length) items[0].close(data);
    },
    onDialogBackdrop(key) {
      const items = this.$dialogService.items.splice(key, 1);
      if (items.length && !items[0].modal) items[0].close(null);
    }
  }
};
</script>
