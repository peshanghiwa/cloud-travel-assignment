<script setup>
import { computed } from "@vue/reactivity";
import { reactive, toRefs } from "vue";

const data = reactive({
  showTooltip: false,
});

const { showTooltip } = toRefs(data);

const list = [
  "breakfast",
  "lunch",
  "dinner",
  "snack",
  "drink",
  "dessert",
  "coffee",
  "tea",
  "free cancellation",
  "free parking",
  "free wifi",
];

const listToShow = computed(() => {
  return list.slice(0, 3);
});
</script>

<template>
  <div class="flex gap-1">
    <div v-for="(item, index) in listToShow">
      <div
        v-if="index < 3"
        :key="index"
        class="text-sm text-secondary border-[1px] px-1 border-secondary hover:bg-secondary hover:text-white transitoin duration-200 cursor-pointer capitalize"
      >
        {{ item }}
      </div>
    </div>
    <Popper
      arrow
      v-if="list.length >= 4"
      :show="showTooltip"
      @mouseover="showTooltip = true"
      @mouseleave="showTooltip = false"
    >
      <div
        class="text-sm text-secondary border-[1px] px-1 border-secondary hover:bg-secondary hover:text-white transitoin duration-200 cursor-pointer capitalize relative"
      >
        +{{ list.length - 3 }}
      </div>
      <template #content>
        <div class="bg-dark-grey grid grid-cols-2 gap-x-7 gap-y-2">
          <div class="flex gap-2">
            <img src="../../assets/SVGs/check.svg" height="20" alt="" />
            <span class="text-sm text-white">Breakfast</span>
          </div>
          <div class="flex gap-2">
            <img src="../../assets/SVGs/check.svg" height="20" alt="" />
            <span class="text-sm text-white">Lunch</span>
          </div>
          <div class="flex gap-2">
            <img src="../../assets/SVGs/check.svg" height="20" alt="" />
            <span class="text-sm text-white">Dinner</span>
          </div>
        </div>
      </template>
    </Popper>
  </div>
</template>
