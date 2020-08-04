<template>
  <VclDialogWrapper centered scrollable v-on:backdrop="backdrop">
    <div class="modal-header">
      <h5 class="modal-title">Modal title</h5>
      <button type="button" class="close" v-on:click="close({ id })">
        <span>&times;</span>
      </button>
    </div>

    <div class="modal-body">
      {{ id }}
      Before getting started with Bootstrap’s modal component, be sure to read
      the following as our menu options have recently changed. Modals are built
      with HTML, CSS, and JavaScript. They’re positioned over everything else in
      the document and remove scroll from the so that modal content scrolls
      instead. Clicking on the modal “backdrop” will automatically close the
      modal. Bootstrap only supports one modal window at a time. Nested modals
      aren’t supported as we believe them to be poor user experiences. Modals
      use position: fixed, which can sometimes be a bit particular about its
      rendering. Whenever possible, place your modal HTML in a top-level
      position to avoid potential interference from other elements. You’ll
      likely run into issues when nesting a .modal within another fixed element.
      Once again, due to position: fixed, there are some caveats with using
      modals on mobile devices. See our browser support docs for details. Due to
      how HTML5 defines its semantics, the autofocus HTML attribute has no
      effect in Bootstrap modals. To achieve the same effect, use some custom
      JavaScript:
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
        Launch second
      </button>
    </div>
  </VclDialogWrapper>
</template>

<script>
import { DialogMixin } from '../../../src';

export default {
  name: 'demo-dialog',
  mixins: [DialogMixin],
  methods: {
    openDemoDialog() {
      this.$dialogService
        .open('demo-dialog-second', { content: 'Demo content data.' })
        .then((data) => {
          console.log(data);
        });
    }
  }
};
</script>
