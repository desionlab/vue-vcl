<!--
 -- edit.component.vue
 -->

<style lang="scss"></style>

<template>
  <ValidationProvider
    tag="section"
    :class="['form-group']"
    v-bind="validation"
    v-slot="{ errors, classes }"
  >
    <!-- Label -->
    <slot name="label">
      <label v-if="label" :for="id" v-html="label" />
    </slot>

    <!-- Input -->
    <slot name="input">
      <input
        :class="['form-control', ...classes]"
        :id="id"
        :type="type"
        :name="field"
        :placeholder="placeholder"
        :title="hint"
        :disabled="disabled"
        :readonly="readonly"
        :value="value"
        @input="onInput"
      />
    </slot>

    <!-- Help -->
    <slot name="help">
      <small v-if="help" class="form-text text-muted" v-html="help" />
    </slot>

    <!-- Errors -->
    <slot name="error">
      <div v-if="errors.length" class="invalid-feedback">
        {{ errors.join(' ') }}
      </div>
    </slot>
  </ValidationProvider>
</template>

<script>
import EditMixin from './edit.mixin';

export default {
  name: 'VclEdit',
  mixins: [EditMixin],
  props: {
    /* VeeValidate ValidationProvider Props */
    validation: {
      type: Object,
      default: () => {
        return null;
      }
    }
  },
  computed: {},
  methods: {}
};
</script>
