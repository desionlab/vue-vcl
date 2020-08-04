<template>
  <VclDialogWrapper size="sm" centered scrollable v-on:backdrop="backdrop">
    <div class="modal-header">
      <h5 class="modal-title">Modal title</h5>
      <button type="button" class="close" v-on:click="close({ id })">
        <span>&times;</span>
      </button>
    </div>

    <div class="modal-body">
      {{ id }}
    </div>

    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-secondary"
        v-on:click="close({ id })"
      >
        Close
      </button>
      <button type="button" class="btn btn-primary" v-on:click="openDemoDialog">
        Launch first
      </button>
    </div>
  </VclDialogWrapper>
</template>

<script>
import { DialogMixin } from '../../../src';

export default {
  name: 'demo-dialog-second',
  mixins: [DialogMixin],
  methods: {
    openDemoDialog() {
      this.$dialogService
        .open('demo-dialog', { content: 'Demo content data.' })
        .then((data) => {
          console.log(data);
        });
    }
  }
};
</script>
