<script setup>
import Card from "../utility/Card.vue";
import Slider from "@vueform/slider";
import { reactive, toRefs, computed } from "vue";
import CheckboxList from "../utility/CheckboxList.vue";

const starsImgGenerator = (number) => {
  let stars = '<div class="flex gap-x-[2px]">';
  for (let i = 0; i < number; i++) {
    stars += '<img src="/src/assets/SVGs/star.svg" height="15" width="15" />';
  }
  return stars + "</div>";
};

const data = reactive({
  rangeSliderValue: [0, 0],
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
});

const { rangeSliderValue, reviewsCheckboxListData, ratingsCheckboxListData } =
  toRefs(data);
const minSGDShow = computed(() => {
  return `SGD  ${rangeSliderValue.value[0]}`;
});
const maxSGDShow = computed(() => {
  return `SGD  ${rangeSliderValue.value[1]}`;
});
</script>

<template>
  <main
    class="custom-size w-full px-3 lg:px-0 lg:w-[85%] mx-auto flex flex-col lg:flex-row my-0 lg:my-[30px] gap-x-4"
  >
    <!-- Filters Container -->
    <aside
      class="w-full lg:w-[290px] absolute top-0 left-0 bottom-0 right-0 lg:relative hidden lg:flex flex-col gap-y-3"
    >
      <section class="relative w-full h-[100px] bg-primary rounded-lg">
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
      <Card title="Price per night" @clear="rangeSliderValue = [0, 0]">
        <Slider
          class="mt-7 mb-5"
          v-model="rangeSliderValue"
          :tooltips="false"
          :lazy="false"
          :min="0"
          :max="1500"
        />
        <div class="flex">
          <input
            readonly
            class="appearance-none block w-full text-sm bg-white text-black border border-light-grey rounded h-[30px] px-4 outline-none"
            type="text"
            :value="minSGDShow"
          />
          <div class="text-lg mx-2 relative bottom-1">__</div>
          <input
            readonly
            class="appearance-none block w-full text-sm bg-white text-black border border-light-grey rounded h-[30px] px-4 outline-none"
            type="text"
            :value="maxSGDShow"
          />
        </div>
      </Card>
      <Card
        title="Reviews"
        @clear="reviewsCheckboxListData.forEach((list) => (list.value = false))"
      >
        <CheckboxList :name="'reviews'" v-model="reviewsCheckboxListData" />
      </Card>
      <Card
        title="Star Rating"
        @clear="ratingsCheckboxListData.forEach((list) => (list.value = false))"
      >
        <CheckboxList :name="'ratings'" v-model="ratingsCheckboxListData" />
      </Card>
      <Card title="Hotel Name" :clearButton="false">
        <div class="relative w-full rounded">
          <input
            class="appearance-none block w-full text-base bg-white text-black border border-light-grey rounded h-[40px] px-4 outline-none"
            type="text"
            placeholder="e.g. Hilton, Ibis ..."
            autocomplete="off"
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
    </aside>
    <!-- End Filters Container -->

    <!-- Mobile Screen Filter Opener -->
    <aside class="w-full bg-success block lg:hidden">test3</aside>

    <!-- Main Content -->
    <section class="grow-0 lg:grow bg-warning">test2</section>
  </main>
</template>
<style>
/* Maion component minimum height will be the full screen minus all the compnent heights */
.custom-size {
  min-height: calc(100vh - 70px - 70px - 50px);
}

@media screen and (min-width: 768px) {
  .custom-size {
    min-height: calc(100vh - 70px - 70px - 60px - 50px - 60px);
  }
}
</style>
