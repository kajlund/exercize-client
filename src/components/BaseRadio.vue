<script setup>
import { useId } from 'vue'

const id = useId();

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: false
  },
  value: {
    type: [String, Number],
    required: true,
  }
});
</script>

<template>
  <input
    :id="id"
    :name="id"
    type="radio"
    v-bind="$attrs"
    :checked="props.modelValue === props.value"
    :value="props.value"
    @change="$emit('update:modelValue', props.value)"
  />
  <label v-if="props.label" :for="id">{{ props.label }}</label>
</template>
