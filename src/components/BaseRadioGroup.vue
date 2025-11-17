<script setup>
import { useId } from 'vue'
import BaseRadio from './BaseRadio.vue';

const id = useId();

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: ''
  },
  options: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
  vertical: {
    type: Boolean,
    required: false,
    default: false
  }
});
</script>

<template>
  <label v-if="props.label" :for="props.name">{{ props.label }}</label>
  <component
    v-for="option in props.options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'" class="radio-group"
    :class="{ horizontal: !vertical }"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :name="props.name"
      :modelValue="props.modelValue"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<style scoped>
.horizontal {
  margin-right: 20px;
}
</style>
