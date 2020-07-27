<style>
.theme-default-content {
  max-width: none;
}

.page-nav {
  max-width: none;
}

.vcl-example {
  position: relative;
  padding: 1rem;
  margin: 1rem -15px 0;
  border: solid #f8f9fa;
  border-width: .2rem;
}
</style>

<template>
  <div class="embed-layout">
    <ParentLayout />
    <VclDialogsPolite v-bind="dialog" />
    <VclToastsPolite v-bind="toasts" />
  </div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue';

export default {
  name: 'EmbedLayout',
  components: {
    ParentLayout
  },
  data: () => {
    return {
      toasts: {},
      dialog: {}
    };
  }
};
</script>
