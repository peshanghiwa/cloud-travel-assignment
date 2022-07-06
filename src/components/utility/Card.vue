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
  <section class="px-5 py-6 bg-white rounded-lg">
    <div class="flex justify-between mb-4">
      <h2 class="text-base text-black">{{ title }}</h2>
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
