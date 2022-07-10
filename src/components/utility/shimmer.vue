<script setup>
// min-h-[155px] md:min-h-[230px]

import { useWindowSize } from "vue-window-size";
const { width: windowWidth } = useWindowSize();
</script>

<template>
  <section
    v-for="i in 2"
    class="w-full min-h-[155px] md:min-h-[230px] rounded-md transition duration-150 p-[10px] flex relative mb-5 z-[1]"
  >
    <div
      class="w-[100px] min-w-[100px] md:w-[200px] md:min-w-[200px] h-auto flex flex-col gap-[2px]"
    >
      <free-style-shimmer
        :is-loading="true"
        :height="windowWidth < 768 ? '135px' : '210px'"
        :width="windowWidth < 768 ? '100px' : '200px'"
        color="#bdbdbd"
        border-radius="0px"
      />
    </div>

    <div class="grow p-3 mb-[60px] md:mb-0">
      <free-style-shimmer
        class="mb-3"
        v-for="i in 3"
        :is-loading="true"
        border-radius="0px"
        width="100%"
        height="20px"
        bor
        color="#bdbdbd"
      />
      <free-style-shimmer
        class="transform translate-y-[30px] hidden md:block"
        :is-loading="true"
        border-radius="0px"
        width="60%"
        height="20px"
        color="#bdbdbd"
      />
    </div>
  </section>
</template>
