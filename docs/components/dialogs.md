# Dialogs <Badge text="beta" type="warning"/>

Add dialogs to your site for lightboxes, user notifications, or completely custom content.

## Live demo

<ClientOnly>
  <div class="vcl-example">
    <button
      type="button"
      class="btn btn-primary"
      v-on:click="openDemoDialog"
    >Launch</button>
  </div>
</ClientOnly>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    openDemoDialog() {
      this.$dialogService
      .open('demo-dialog', { content: 'Demo content data.' })
      .then((data) => {
        console.log(data)
      });
    }
  }
}
</script>
