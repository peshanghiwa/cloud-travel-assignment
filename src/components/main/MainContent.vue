<script setup>
import sortbyFilterData from "../../composables/sortbyFilter";
import { reactive, toRefs } from "vue";
import PropertyCard from "./PropertyCard.vue";
import Shimmer from "./shimmer.vue";
// import PropertyCardShimmer from "./propertyCardShimmer.vue";
  getPropertiesError,

const {
  sortbyOptionsList,
  selectedSortbyOption,
  showSortbyFilters,
  onSelectSortby,
} = sortbyFilterData();

const data = reactive({
  selectedfilter: 1,
  filterDropdown: false,
  propertyCards: [
    {
      id: 1,
      title: "The Fullerton Bay Hotel",
      stars: 5,
      location: "80 Collyer quay, Marina Bay, Singapore, Singapore, 049326",
      comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      labels: [
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
      ],
      health: "Singapore - SG Clean",
      mainImage: "src/assets/images/hotel-1.png",
      images: [
        "src/assets/images/hotel-2.png",
        "src/assets/images/hotel-3.png",
        "src/assets/images/hotel-4.png",
        "src/assets/images/hotel-5.png",
      ],
      price: 120,
      discount: 16,
    },
    {
      id: 2,
      title: "The Istanbul Hotel",
      stars: 3,
      location: "25 Hengim, sirana, Istanbul, Istanbul, 1345672 ",
      comment:
        "Lorem ipsum dolor, sit amet consectetur asd a dfs d asd  fgdfgdfg  dfgs sdf sdf fdg df g asd asd gfsdgsdfa dsas da fsd sdfg sdf asdad ipisicing elit. Nihil voluptates tempore nesciunt?",
      labels: ["breakfast", "lunch"],
      health: "Istanbul - IS Clean",
      mainImage: "src/assets/images/hotel-1.png",
      images: [
        "src/assets/images/hotel-2.png",
        "src/assets/images/hotel-3.png",
        "src/assets/images/hotel-4.png",
        "src/assets/images/hotel-5.png",
      ],
      price: 100,
      discount: 20,
    },
  ],
});

const { selectedfilter, filterDropdown, propertyCards } = toRefs(data);

const setSelectedFilter = (id) => {
  selectedfilter.value = id;
  if (filterDropdown) filterDropdown.value = false;
};

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <section class="px-4 lg:px-0 mt-5 lg:mt-0 flex flex-col justify-between grow">
    <!-- Content (Top) Section -->
    <section>
      <div
        class="md:hidden h-[30px] bg-primary flex justify-between items-center rounded px-3 mb-0 cursor-pointer relative"
      >
        <div
          class="w-full h-full absolute top-0 left-0"
          @click="filterDropdown = !filterDropdown"
        ></div>
        <div
          v-if="filterDropdown"
          class="absolute rounded overflow-hidden w-full top-[35px] right-[0px] bg-white shadow-xl z-10"
        >
          <button
            class="w-full h-[35px] hover:bg-light-grey flex items-center justify-between px-3"
            @click="setSelectedFilter(1)"
          >
            <span>Popularity</span>
            <img
              src="../../assets/SVGs/check.svg"
              width="18"
              :class="{
                hidden: selectedfilter !== 1,
              }"
              alt=""
            />
          </button>
          <button
            class="w-full h-[35px] hover:bg-light-grey flex items-center justify-between px-3"
            @click="setSelectedFilter(2)"
          >
            <span>Reviews</span>
            <img
              src="../../assets/SVGs/check.svg"
              width="18"
              :class="{
                hidden: selectedfilter !== 2,
              }"
              alt=""
            />
          </button>
          <button
            class="w-full h-[35px] hover:bg-light-grey flex items-center justify-between px-3"
            @click="setSelectedFilter(3)"
          >
            <span>Discount</span>
            <img
              src="../../assets/SVGs/check.svg"
              width="18"
              :class="{
                hidden: selectedfilter !== 3,
              }"
              alt=""
            />
          </button>
        </div>
        <span class="text-white text-base">Select One</span>
        <svg
          class="h-[15px] w-[15px]"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="white"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </div>
      <h1 class="text-lg font-bold mt-4 md:mt-0">
        Singapore: 9999 properties found
      </h1>
      <section
        class="hidden md:flex rounded-md bg-white h-[45px] mt-3 text-base"
      >
        <button
          class="w-full h-full border-r-[1px] border-r-light-grey flex justify-center items-center transition-all duration-150 rounded-tl-md rounded-bl-md"
          :class="{
            'bg-primary': selectedfilter === 1,
            'text-white': selectedfilter === 1,
          }"
          @click="setSelectedFilter(1)"
        >
          Popularity
        </button>
        <div
          class="w-full h-full border-r-[1px] cursor-pointer border-r-light-grey flex justify-center items-center relative z-[2]"
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
          @click="setSelectedFilter(2)"
        >
          Reviews
        </button>
        <button
          class="w-full h-full flex justify-center items-center transition-all duration-150 rounded-tr-md rounded-br-md"
          :class="{
            'bg-primary': selectedfilter === 3,
            'text-white': selectedfilter === 3,
          }"
          @click="setSelectedFilter(3)"
        >
          Discount
        </button>
      </section>
      <article class="mt-5">
        <PropertyCard
          v-if="true"
          v-for="card in propertyCards"
          :key="card.id"
          :title="card.title"
          :stars="card.stars"
          :location="card.location"
          :comment="card.comment"
          :labels="card.labels"
          :health="card.health"
          :mainImage="card.mainImage"
          :images="card.images"
          :price="card.price"
          :discount="card.discount"
        />
        <div
          v-else-if="!getProperiesLoading && properties.length === 0"
          class="py-14 text-lg text-center flex flex-col justify-center items-center font-bold text-medium-grey"
        >
          <img
            src="../../assets/SVGs/search.svg"
            height="25"
            width="25"
            alt=""
            class="mb-3"
          />
          <h3>Sorry! We couldn't find any properties for your search.</h3>
        </div>
        <div
          v-else-if="!getProperiesLoading && getPropertiesError"
          class="py-14 flex text-center flex-col justify-center items-center text-medium-grey"
        >
          <img
            src="../../assets/SVGs/error.svg"
            height="25"
            width="25"
            alt=""
            class="mb-3"
          />
          <h3 class="font-bold text-lg">Opps, something went wrong.</h3>
          <p class="text-sm">{{ getPropertiesError }}</p>
        </div>
        <Shimmer v-else />
      </article>
    </section>

    <!-- Pagination (Bottom) Section -->
    <section class="flex flex-col lg:flex-row justify-between my-10 lg:my-0">
      <div class="flex justify-between mb-5 lg:mb-0">
        <button class="text-primary text-base" @click="scrollTop">
          Back to top
        </button>

        <span class="inline lg:hidden">showing result 1 - 20 of 9999</span>
      </div>
      <div class="flex items-center text-base gap-4">
        <span class="hidden lg:inline">showing result 1 - 20 of 9999</span>
        <vue-awesome-paginate
          :total-items="255"
          :items-per-page="20"
          :max-pages-shown="6"
          :current-page="1"
        >
          <template #prev-button>
            <span>
              <img
                src="../../assets/SVGs/next.svg"
                height="9"
                width="9"
                class="transform rotate-180"
              />
            </span>
          </template>
          <template #next-button>
            <span>
              <img src="../../assets/SVGs/next.svg" height="9" width="9" />
            </span>
          </template>
        </vue-awesome-paginate>
      </div>
    </section>
  </section>
</template>

<style>
.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.paginate-buttons {
  padding: 4px 10px;
}

.active-page {
  background-color: #002d63;
  color: white;
  padding: 4px 10px;
  border-radius: 5px;
}

.back-button {
  min-width: 9px;
  min-height: 9px;
}

.next-button {
  min-width: 9px;
  min-height: 9px;
}

@media screen and (max-width: 768px) {
  .pagination-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0px;
    flex-grow: 1;
  }
}
</style>
