<script setup>
import { useId } from 'vue'

const id = useId();

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: ''
  },
  modelValue: {
    type: Boolean,
    required: false,
    default: false
  },
  error: {
    type: String,
    required: false,
    default: ''
  }
});
</script>

<template>
  <div class="form-group">
    <label v-if="props.label" :for="id">{{ props.label }}</label>
    <input
      :id="id"
      :name="id"
      type="checkbox"
      v-bind="$attrs"
      :checked="props.modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <p
      v-if="props.error"
      class="error"
      :id="`${id}-error`"
      aria-live="assertive"
    >{{ props.error }}</p>
  </div>
</template>
