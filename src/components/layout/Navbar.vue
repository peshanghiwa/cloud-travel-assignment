<script setup>
import locationSearchData from "../../composables/locationSearch";
import { useWindowSize } from "vue-window-size";
const data = [
  { label: "Singapore, Singapore", cityCode: "sgsg" },
  { label: "Kuala Lumpur, Malaysia", cityCode: "klmy" },
  { label: "Manila, Philippines", cityCode: "mlph" },
];
const { showLocationSearch } = locationSearchData();
const { width: windowWidth } = useWindowSize();
const toggleLocationSearch = () => {
  if (windowWidth.value < 768 && !showLocationSearch.value) {
    showLocationSearch.value = true;
  } else {
    showLocationSearch.value = false;
  }
};
</script>

<template>
  <div
    class="text-white h-[50px] z-10 md:h-[70px] bg-white md:bg-primary flex items-center sticky top-0 border-b-2 md:border-none border-light-grey"
  >
    <div class="relative w-full md:w-[85%] mx-auto rounded">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button
          type="submit"
          class="p-1 focus:outline-none focus:shadow-outline"
        >
          <img
            src="../../assets/SVGs/search.svg"
            class="h-[20px] w-[20px] md:h-[15px] md:w-[15px]"
            alt="Search Icon"
          />
        </button>
      </span>
      <input
        type="text"
        class="w-full md:w-[470px] h-[50px] text-base text-black rounded-sm pl-10 outline-none"
        placeholder="Singapore, Singapore"
        autocomplete="off"
        @click="toggleLocationSearch"
      />
      <div
        v-if="false"
        class="w-full md:w-[470px] absolute custom-border rounded top-12 md:top-[55px] left-0 bg-white border-light-grey text-black z-40"
      >
        <div
          v-for="city in data"
          :key="city.cityCode"
          class="bg-white cursor-pointer hover:bg-light-grey text-black p-3 flex"
        >
          <img
            src="../../assets/SVGs/location.svg"
            height="15"
            width="15"
            class="mr-2"
            alt=""
          />
          {{ city.label }}
        </div>
      </div>
      <button
        class="ml-2 text-lg h-[50px] px-12 rounded-sm bg-secondary hidden md:inline"
      >
        Search
      </button>
    </div>
  </div>
</template>

<style>
.custom-border {
  border-width: 2px;
}
</style>
