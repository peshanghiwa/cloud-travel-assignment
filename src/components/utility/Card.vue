<script setup>
import { toRefs } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  clearButton: {
    type: Boolean,
    default: true,
  },
});

const { title, clearButton } = toRefs(props);
</script>

<template>
  <section class="px-5 py-3 lg:py-6 bg-white rounded-none lg:rounded-lg">
    <div class="flex justify-between mb-4">
      <h2 class="text-base text-black font-bold">{{ title }}</h2>
      <button
        @click="$emit('clear')"
        v-if="clearButton"
        class="text-sm text-primary font-bold"
      >
        CLEAR
      </button>
    </div>
    <slot />
  </section>
</template>
