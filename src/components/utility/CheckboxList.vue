<script setup>
import { toRefs, ref } from "vue";
const props = defineProps({
  uniqueId: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Array,
    default: [],
  },
  limit: {
    type: Number,
    default: -1,
  },
});

defineEmits(["update:modelValue"]);

const { modelValue, uniqueId, limit: originalLimit } = toRefs(props);
const limit = ref(originalLimit.value);

const toggleShowMore = (state) => {
  if (state) limit.value = modelValue.value.length;
  else limit.value = originalLimit.value;
};
</script>

<template>
  <div v-for="(checkbox, index) in modelValue" :key="checkbox.id">
    <div
      v-if="limit === -1 || (limit !== -1 && index + 1 <= limit)"
      class="flex justify-between mb-2"
    >
      <div class="flex items-center">
        <input
          type="checkbox"
          :id="`${uniqueId}-checkbox-${checkbox.id}`"
          v-model="checkbox.value"
          @change="$emit('update:modelValue', modelValue)"
          class="checkbox-input w-[15px] h-[15px] text-primary bg-white rounded border-dark-grey focus:ring-primary accent-primary"
        />
        <label
          class="text-sm text-dark-grey relative left-2"
          :for="`${uniqueId}-checkbox-${checkbox.id}`"
        >
          <span v-html="checkbox.title" />
        </label>
      </div>
      <span class="float-right text-medium-grey text-sm">
        {{ checkbox.number }}</span
      >
    </div>
  </div>
  <button
    v-if="originalLimit !== -1"
    class="flex justify-center items-center hover:underline show-more-button"
    @click="toggleShowMore(limit < modelValue.length)"
  >
    <span class="text-sm">
      {{
        limit < modelValue.length
          ? `Show ${modelValue.length - limit} more`
          : "Show less"
      }}</span
    >
    <img
      src="../../assets/SVGs/arrow-down.svg"
      class="ml-2 mt-[3px] transform"
      :class="[limit < modelValue.length ? '' : 'rotate-180']"
      height="7"
      width="7"
    />
  </button>
</template>
