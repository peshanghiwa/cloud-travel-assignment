<script setup>
import Card from "../utility/Card.vue";
import Slider from "@vueform/slider";
import { reactive, toRefs, computed } from "vue";
import { useWindowSize } from "vue-window-size";
import CheckboxList from "../utility/CheckboxList.vue";
import sortbyFilterData from "../../composables/sortbyFilter";

const {
  sortbyOptionsList,
  selectedSortbyOption,
  showSortbyFilters,
  onSelectSortby,
} = sortbyFilterData();

const starsImgGenerator = (number) => {
  let stars = '<div class="flex gap-x-[2px]">';
  for (let i = 0; i < number; i++) {
    stars += '<img src="/src/assets/SVGs/star.svg" height="15" width="15" />';
  }
  return stars + "</div>";
};

const data = reactive({
  showSidebarFilters: true,
  rangeSliderValue: [0, 0],
  hotelName: "",
  reviewsCheckboxListData: [
    {
      id: 1,
      title: "Excellent",
      number: 999,
      value: false,
    },
    {
      id: 2,
      title: "Very Good",
      number: 999,
      value: false,
    },
    {
      id: 3,
      title: "Good",
      number: 999,
      value: false,
    },
    {
      id: 4,
      title: "Fair",
      number: 999,
      value: false,
    },
    {
      id: 5,
      title: "Poor",
      number: 999,
      value: false,
    },
    {
      id: 6,
      title: "No Review",
      number: 999,
      value: false,
    },
  ],
  ratingsCheckboxListData: [
    {
      id: 1,
      title: starsImgGenerator(5),
      number: 999,
      value: false,
    },
    {
      id: 2,
      title: starsImgGenerator(4),
      number: 999,
      value: false,
    },
    {
      id: 3,
      title: starsImgGenerator(3),
      number: 999,
      value: false,
    },
    {
      id: 4,
      title: starsImgGenerator(2),
      number: 999,
      value: false,
    },
    {
      id: 5,
      title: starsImgGenerator(1),
      number: 999,
      value: false,
    },
    {
      id: 6,
      title: "No Rating",
      number: 999,
      value: false,
    },
  ],
  reservationsCheckboxListData: [
    {
      id: 1,
      title: "Free cancellation",
      number: 999,
      value: false,
    },
    {
      id: 2,
      title: "Book now, pay later",
      number: 999,
      value: false,
    },
    {
      id: 3,
      title: "Pay at hotel",
      number: 999,
      value: false,
    },
  ],
  mealPlansCheckboxListData: [
    {
      id: 1,
      title: "Room only",
      number: 999,
      value: false,
    },
    {
      id: 2,
      title: "Breakfast",
      number: 999,
      value: false,
    },
    {
      id: 3,
      title: "Lunch",
      number: 999,
      value: false,
    },
    {
      id: 4,
      title: "Dinner",
      number: 999,
      value: false,
    },
    {
      id: 5,
      title: "Half board",
      number: 999,
      value: false,
    },
    {
      id: 6,
      title: "Full board",
      number: 999,
      value: false,
    },
    {
      id: 7,
      title: "All inclusive",
      number: 999,
      value: false,
    },
  ],
  propertyTypesCheckboxListData: [
    {
      id: 0,
      title: "Hotel",
      number: 999,
      value: false,
    },
    {
      id: 1,
      title: "Hostel/Backpacker accomodation",
      number: 999,
      value: false,
    },
    {
      id: 2,
      title: "Apartment",
      number: 999,
      value: false,
    },
    {
      id: 3,
      title: "Aparthotel",
      number: 999,
      value: false,
    },
    {
      id: 4,
      title: "Resort",
      number: 999,
      value: false,
    },
    {
      id: 5,
      title: "Inn",
      number: 999,
      value: false,
    },
    {
      id: 6,
      title: "Motel",
      number: 999,
      value: false,
    },
    {
      id: 7,
      title: "Bed & breakfast",
      number: 999,
      value: false,
    },
    {
      id: 8,
      title: "Guesthouse",
      number: 999,
      value: false,
    },
    {
      id: 9,
      title: "Condo",
      number: 999,
      value: false,
    },
    {
      id: 10,
      title: "All-inclusive property",
      number: 999,
      value: false,
    },
    {
      id: 11,
      title: "Hostal",
      number: 999,
      value: false,
    },
  ],
  facilitiesCheckboxListData: [
    {
      id: 1,
      title: "Swimming pool",
      number: 999,
      value: false,
    },
    {
      id: 2,
      title: "Internet access",
      number: 999,
      value: false,
    },
    {
      id: 3,
      title: "Non-smoking floor",
      number: 999,
      value: false,
    },
  ],
});

const { width: windowWidth } = useWindowSize();

const {
  showSidebarFilters,
  rangeSliderValue,
  hotelName,
  reviewsCheckboxListData,
  ratingsCheckboxListData,
  reservationsCheckboxListData,
  mealPlansCheckboxListData,
  propertyTypesCheckboxListData,
  facilitiesCheckboxListData,
} = toRefs(data);

const minSGDShow = computed(() => {
  return `SGD  ${rangeSliderValue.value[0]}`;
});
const maxSGDShow = computed(() => {
  return `SGD  ${rangeSliderValue.value[1]}`;
});

const clearAllFilters = () => {
  rangeSliderValue.value = [0, 0];
  hotelName.value = "";
  reviewsCheckboxListData.value.forEach((item) => {
    item.value = false;
  });
  ratingsCheckboxListData.value.forEach((item) => {
    item.value = false;
  });
  reservationsCheckboxListData.value.forEach((item) => {
    item.value = false;
  });
  mealPlansCheckboxListData.value.forEach((item) => {
    item.value = false;
  });
  propertyTypesCheckboxListData.value.forEach((item) => {
    item.value = false;
  });
  facilitiesCheckboxListData.value.forEach((item) => {
    item.value = false;
  });
};

const applyFilters = () => {
  showSidebarFilters.value = false;
};
</script>
<template>
  <!-- Filters Container -->
  <aside
    v-if="windowWidth > 975 || showSidebarFilters"
    class="w-full lg:w-[290px] absolute top-0 left-0 bottom-0 right-0 lg:relative lg:flex flex-col gap-y-3 z-20 lg:z-0"
  >
    <div
      v-if="windowWidth < 975 && showSidebarFilters"
      class="h-[55px] bg-white border-b-[2px] border-b-light-grey fixed top-0 left-0 right-0 z-30 text-lg flex items-center px-5"
    >
      <img
        src="../../assets/SVGs/close.svg"
        height="15"
        width="15"
        class="mr-5 cursor-pointer"
        alt=""
        @click="showSidebarFilters = false"
      />
      <span> Sort & Filter </span>
    </div>
    <section
      class="relative w-full hidden lg:block h-[100px] bg-primary rounded-lg"
    >
      <button
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base rounded h-[40px] w-[170px] bg-primary"
      >
        Show on map
      </button>
      <img
        src="../../assets/images/map.png"
        class="w-full h-full bg-cover"
        alt=""
      />
    </section>
    <div
      v-if="windowWidth < 975 && showSidebarFilters"
      class="h-[40px] bg-background flex items-center font-bold text-base px-5 mt-[55px] lg:mt-0 text-primary"
    >
      Sort by
    </div>
    <div
      v-if="windowWidth < 975 && showSidebarFilters"
      class="h-[50px] bg-white flex items-center cursor-pointer justify-between text-base px-5 text-black"
      @click="showSortbyFilters = !showSortbyFilters"
    >
      <span> {{ selectedSortbyOption.text }} </span>
      <img
        src="../../assets/SVGs/arrow-down.svg"
        height="10"
        width="10"
        class="transform transition duration-200"
        :class="[showSortbyFilters ? 'rotate-180' : 'rotate-0']"
        alt=""
      />
    </div>
    <div
      v-if="showSortbyFilters"
      v-for="(option, index) in sortbyOptionsList"
      :key="index"
      class="h-[50px] bg-white hover:bg-light-grey cursor-pointer text-base px-5 flex items-center"
      @click="onSelectSortby(option.id)"
    >
      {{ option.text }}
    </div>
    <div
      v-if="windowWidth < 975 && showSidebarFilters"
      class="h-[40px] bg-background flex items-center font-bold text-base px-5 text-primary"
    >
      Filter by
    </div>
    <Card title="Price per night" @clear="rangeSliderValue = [0, 0]" class="">
      <Slider
        class="mt-7 mb-5"
        v-model="rangeSliderValue"
        :tooltips="false"
        :lazy="false"
        :min="0"
        :max="1500"
      />
      <div class="flex justify-between">
        <input
          readonly
          class="appearance-none block lg:w-full w-[30%] text-sm bg-white text-black border border-light-grey rounded h-[30px] px-4 outline-none"
          type="text"
          :value="minSGDShow"
        />
        <div class="text-lg mx-2 relative bottom-1">__</div>
        <input
          readonly
          class="appearance-none block lg:w-full w-[35%] text-sm bg-white text-black border border-light-grey rounded h-[30px] px-4 outline-none"
          type="text"
          :value="maxSGDShow"
        />
      </div>
    </Card>
    <Card
      title="Reviews"
      @clear="reviewsCheckboxListData.forEach((list) => (list.value = false))"
    >
      <CheckboxList :unique-id="'reviews'" v-model="reviewsCheckboxListData" />
    </Card>
    <Card
      title="Star Rating"
      @clear="ratingsCheckboxListData.forEach((list) => (list.value = false))"
    >
      <CheckboxList :unique-id="'ratings'" v-model="ratingsCheckboxListData" />
    </Card>
    <Card title="Hotel Name" :clearButton="false">
      <div class="relative w-full rounded">
        <input
          class="appearance-none block w-full text-base bg-white text-black border border-light-grey rounded h-[40px] px-4 outline-none"
          type="text"
          placeholder="e.g. Hilton, Ibis ..."
          autocomplete="off"
          v-model="hotelName"
        />
        <span class="absolute inset-y-0 right-2 flex items-center pl-2">
          <button
            type="submit"
            class="p-1 focus:outline-none focus:shadow-outline"
          >
            <img
              src="../../assets/SVGs/search.svg"
              class="md:h-[15px] md:w-[15px]"
              alt="Search Icon"
            />
          </button>
        </span>
      </div>
    </Card>
    <Card
      title="Reservation Policy"
      @clear="
        reservationsCheckboxListData.forEach((list) => (list.value = false))
      "
    >
      <CheckboxList
        :unique-id="'reservations'"
        v-model="reservationsCheckboxListData"
      />
    </Card>
    <Card
      title="Meal Plan"
      @clear="mealPlansCheckboxListData.forEach((list) => (list.value = false))"
    >
      <CheckboxList
        :unique-id="'meals'"
        v-model="mealPlansCheckboxListData"
        :limit="2"
      />
    </Card>
    <Card
      title="Property Type"
      @clear="
        propertyTypesCheckboxListData.forEach((list) => (list.value = false))
      "
    >
      <CheckboxList
        :unique-id="'properties'"
        v-model="propertyTypesCheckboxListData"
        :limit="3"
      />
    </Card>
    <Card
      title="Facilities"
      class="pb-[80px] lg:pb-0"
      @clear="
        facilitiesCheckboxListData.forEach((list) => (list.value = false))
      "
    >
      <CheckboxList
        :unique-id="'facilities'"
        v-model="facilitiesCheckboxListData"
      />
    </Card>
    <div
      v-if="windowWidth < 975 && showSidebarFilters"
      class="h-[60px] bg-white border-t-[2px] border-t-light-grey fixed bottom-0 left-0 right-0 z-30 text-lg flex items-center px-5 gap-x-5"
    >
      <button
        class="h-[40px] w-full border-primary border-[3px] font-bold text-base rounded"
        @click="clearAllFilters"
      >
        Clear
      </button>
      <button
        class="h-[40px] w-full text-base bg-primary text-white font-bold rounded"
        @click="applyFilters"
      >
        Filter
      </button>
    </div>
  </aside>
  <!-- End Filters Container -->

  <!-- Mobile Screen Filter Opener -->
  <div class="bg-white flex lg:hidden">
    <button
      @click="showSidebarFilters = true"
      class="w-full flex justify-center items-center h-[50px] text-base"
    >
      <img
        src="../../assets/SVGs/filter.svg"
        class="mr-2"
        height="16"
        width="16"
        alt=""
      />
      Sort & Filter
    </button>
    <div class="w-[2px] h-[50px] bg-light-grey"></div>
    <button class="w-full h-[50px] flex justify-center items-center text-base">
      <img
        src="../../assets/SVGs/marker.svg"
        class="mr-2"
        height="16"
        width="16"
      />
      Map View
    </button>
  </div>
  <!-- End Mobile Screen Filter Opener -->
</template>
