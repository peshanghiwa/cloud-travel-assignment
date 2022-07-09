<script setup>
import LabelList from "../utility/LabelList.vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  labels: {
    type: Array,
    required: true,
  },
  health: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <section
    class="bg-white w-full min-h-[155px] md:min-h-[230px] rounded-md hover:shadow-lg transition duration-150 p-[10px] flex relative mb-5 z-[1]"
  >
    <!-- Images section -->
    <div
      class="w-[100px] min-w-[100px] md:w-[200px] md:min-w-[200px] h-auto flex flex-col gap-[2px]"
    >
      <div class="h-full md:h-[160px] w-full">
        <img :src="mainImage" class="h-full w-full object-cover" alt="" />
      </div>
      <div class="h-[48px] w-full md:flex gap-[2px] hidden">
        <div v-for="(image, index) in images" :key="index" class="w-full">
          <img :src="image" class="h-full w-full object-cover" alt="" />
        </div>
      </div>
    </div>
    <!-- Property content section -->
    <div class="grow p-3 mb-[60px] md:mb-0">
      <h2
        class="text-lg flex items-start md:items-center gap-0 md:gap-2 flex-col md:flex-row"
      >
        {{ title }}

        <span class="flex">
          <img
            src="../../assets/SVGs/star.svg"
            v-for="i in stars"
            :key="i"
            class="h-[12px] w-[12px] md:h-[16px] md:w-[16px]"
            alt=""
          />
        </span>
      </h2>
      <p class="text-xs md:text-sm mt-1">
        {{ location }}

        <span class="text-primary hover:underline cursor-pointer">
          (view map)
        </span>
      </p>
      <p
        :class="`text-sm text-medium-grey truncate xl:w-[600px] w-[300px] mt-2 hidden md:block`"
      >
        "{{ comment }}"
      </p>

      <LabelList :list="labels" class="mt-2 hidden md:flex" />
      <div class="gap-2 mt-3 hidden md:flex">
        <img src="../../assets/SVGs/health.svg" height="20" alt="" />
        <span class="text-sm">{{ health }}</span>
      </div>
      <div class="block md:hidden text-xs mt-1">
        <span class="font-bold"> 4.5 Excellent </span>
        <span> (12,345 reviews) </span>
      </div>
    </div>
    <!-- pricing section -->
    <div
      class="w-[160px] min-w-[160px] md:h-[210px] absolute md:relative bottom-[10px] right-[10px] md:bottom-[0px] md:right-[0px] flex flex-col justify-between items-end"
    >
      <div></div>
      <div class="flex flex-col items-end">
        <p
          v-if="discount && discount > 0"
          class="text-xs md:text-sm bg-secondary inline-block px-[5px] py-[2px] font-bold text-white"
        >
          Save {{ discount }}% TODAY
        </p>
        <span class="text-medium-grey md:text-sm text-xs text-right mt-2"
          >Nightly avg.</span
        >
        <div class="flex items-end gap-2">
          <span
            v-if="discount && discount > 0"
            class="text-medium-grey md:text-sm text-xs line-through mb-0 md:mb-[4px]"
            >SGD {{ price }}</span
          >
          <span class="text-black font-bold text-base md:text-xl"
            >SGD {{ (price - price * (discount / 100)).toFixed(0) }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>
