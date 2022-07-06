<script setup>
import { toRefs } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Array,
    default: [],
  },
});

defineEmits(["update:modelValue"]);

const { modelValue, name } = toRefs(props);
</script>

<template>
  <div v-for="checkbox in modelValue" :key="checkbox.id">
    <input
      type="checkbox"
      :id="`${name}-checkbox-${checkbox.id}`"
      v-model="checkbox.value"
      @change="$emit('update:modelValue', modelValue)"
      class="w-[15px] h-[15px] text-primary bg-white rounded border-dark-grey focus:ring-primary accent-primary"
    />

    <label
      class="text-sm text-dark-grey relative bottom-[3px] left-2"
      :for="`${name}-checkbox-${checkbox.id}`"
    >
      <span v-html="checkbox.title" />
    </label>

    <span class="float-right text-medium-grey text-sm">
      {{ checkbox.number }}</span
    >
  </div>
</template>
