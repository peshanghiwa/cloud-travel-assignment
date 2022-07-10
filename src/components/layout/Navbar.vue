<script setup>
import locationSearchStore from "../../composables/locationSearch";
import { useWindowSize } from "vue-window-size";
const {
  showLocationSearchModal,
  showSuggestions,
  locationSearchLoading,
  onSelectCity,
  locationSearchData,
  fetchLocationSearch,
} = locationSearchStore();
const { width: windowWidth } = useWindowSize();

const openSuggestions = async () => {
  if (windowWidth.value < 768 && !showLocationSearchModal.value) {
    showLocationSearchModal.value = true;
  } else {
    await fetchLocationSearch();
    showSuggestions.value = true;
    showLocationSearchModal.value = false;
  }
};

const closeSuggestions = () => {
  showSuggestions.value = false;
};
</script>

<template>
  <div
    class="text-white h-[50px] z-10 md:h-[70px] bg-white md:bg-primary flex items-center sticky top-0 border-b-2 md:border-none border-light-grey"
  >
    <div class="w-full md:w-[85%] mx-auto block md:flex">
      <div class="relative rounded bg-black">
        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
          <button
            type="submit"
            class="p-1 focus:outline-none focus:shadow-outline"
          >
            <img
              src="../../assets/SVGs/search.svg"
              class="h-[18px] w-[18px]"
              alt="Search Icon"
            />
          </button>
        </span>
        <input
          type="text"
          class="w-full md:w-[470px] h-[50px] text-base text-black rounded-sm pl-10 outline-none"
          placeholder="Singapore, Singapore"
          autocomplete="off"
          @click="openSuggestions"
        />
        <span
          v-if="locationSearchLoading && windowWidth > 768"
          class="absolute inset-y-0 right-0 flex items-center pl-2"
        >
          <button
            type="submit"
            class="p-1 focus:outline-none focus:shadow-outline"
          >
            <img
              src="../../assets/SVGs/loading.svg"
              class="h-[40px]"
              alt="Search Icon"
            />
          </button>
        </span>
        <div
          v-click-outside="closeSuggestions"
          v-if="showSuggestions"
          class="w-full md:w-[470px] absolute border-[1px] rounded top-12 md:top-[55px] left-0 bg-white border-light-grey text-black z-40 shadow-2xl"
        >
          <div
            v-if="locationSearchData.length > 0"
            v-for="city in locationSearchData"
            :key="city.cityCode"
            class="bg-white cursor-pointer hover:bg-light-grey text-black p-3 flex"
            @click="onSelectCity(city.cityCode)"
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
          <div v-else class="text-base text-center text-medium-grey py-4">
            No Suggestions Found
          </div>
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

<style></style>
