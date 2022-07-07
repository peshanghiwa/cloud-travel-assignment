<script setup>
import sortbyFilterData from "../../composables/sortbyFilter";
import { reactive, toRefs } from "vue";

const {
  sortbyOptionsList,
  selectedSortbyOption,
  showSortbyFilters,
  onSelectSortby,
} = sortbyFilterData();

const data = reactive({
  selectedfilter: 1,
});

const { selectedfilter } = toRefs(data);
</script>

<template>
  <section class="grow-0 lg:grow">
    <h1 class="text-lg font-bold">Singapore: 9999 properties found</h1>
    <section class="flex rounded-md bg-white h-[45px] mt-3 text-base">
      <button
        class="w-full h-full border-r-[1px] border-r-light-grey flex justify-center items-center transition-all duration-150 rounded-tl-md rounded-bl-md"
        :class="{
          'bg-primary': selectedfilter === 1,
          'text-white': selectedfilter === 1,
        }"
        @click="selectedfilter = 1"
      >
        Popularity
      </button>
      <div
        class="w-full h-full border-r-[1px] cursor-pointer border-r-light-grey flex justify-center items-center relative"
      >
        <div
          class="w-full h-full absolute top-0 left-0"
          @click="showSortbyFilters = !showSortbyFilters"
        ></div>
        <span> {{ selectedSortbyOption.text }} </span>
        <img
          src="../../assets/SVGs/arrow-down.svg"
          height="10"
          width="10"
          class="ml-2"
        />
        <button
          v-if="showSortbyFilters"
          v-for="option in sortbyOptionsList"
          :key="option.id"
          @click="onSelectSortby(option.id)"
          class="w-full h-full absolute top-[50px] bg-white rounded-md shadow-md hover:bg-primary hover:text-white transition-all duration-150"
        >
          {{ option.text }}
        </button>
      </div>
      <button
        class="w-full h-full border-r-[1px] border-r-light-grey flex justify-center items-center transition-all duration-150"
        :class="{
          'bg-primary': selectedfilter === 2,
          'text-white': selectedfilter === 2,
        }"
        @click="selectedfilter = 2"
      >
        Reviews
      </button>
      <button
        class="w-full h-full flex justify-center items-center transition-all duration-150 rounded-tr-md rounded-br-md"
        :class="{
          'bg-primary': selectedfilter === 3,
          'text-white': selectedfilter === 3,
        }"
        @click="selectedfilter = 3"
      >
        Discount
      </button>
    </section>
  </section>
</template>
