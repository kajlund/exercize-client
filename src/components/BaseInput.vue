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
    type: [String, Number],
    required: false,
    default: ''
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
    <label :for="id">{{ props.label }}</label>
    <input
      v-bind="$attrs"
      class="field"
      :placeholder="props.label"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :aria-describedby="error ? `${id}-error` : null"
      :aria-invalid="error ? 'true' : 'false'"
    >
    <p
      v-if="props.error"
      class="error"
      :id="`${id}-error`"
      aria-live="assertive"
    >{{ props.error }}</p>
  </div>

</template>
