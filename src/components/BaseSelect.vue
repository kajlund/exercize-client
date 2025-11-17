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
  options: {
    type: Array,
    required: true,
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
    <select
      :id="id"
      :name="id"
      v-bind="{ ...$attrs, onChange: $event => $emit('update:modelValue', $event.target.value) }"
      class="field"
      :placeholder="props.label"
      :value="props.modelValue"
      :aria-describedby="error ? `${id}-error` : null"
      :aria-invalid="error ? 'true' : 'false'"
    >
      <option disabled value="">Please select one</option>
      <option v-for="option in props.options" :key="option" :value="option" selected="option === props.modelValue">
        {{ option }}
      </option>
    </select>
    <p
      v-if="props.error"
      class="error"
      :id="`${id}-error`"
      aria-live="assertive"
    >{{ props.error }}</p>
  </div>
</template>
