<script setup>
import LabelList from "../utility/LabelList.vue";
</script>

<template>
  <section
    class="bg-white w-full h-[230px] rounded-md hover:shadow-lg transition duration-150 p-[10px] flex relative"
  >
    <!-- Images section -->
    <div class="w-[200px] h-full flex flex-col gap-[2px]">
      <div class="h-full md:h-[160px] w-full">
        <img
          src="../../assets/images/hotel-1.png"
          class="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div class="h-[48px] w-full md:flex gap-[2px] hidden">
        <div class="w-full">
          <img
            src="../../assets/images/hotel-2.png"
            class="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div class="w-full">
          <img
            src="../../assets/images/hotel-3.png"
            class="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div class="w-full">
          <img
            src="../../assets/images/hotel-4.png"
            class="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div class="w-full">
          <img
            src="../../assets/images/hotel-5.png"
            class="h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- Property content section -->
    <div class="grow p-3">
      <h2 class="text-lg flex gap-0 md:gap-3 flex-col md:flex-row">
        The Fullerton Bay Hotel

        <span class="flex">
          <img
            src="../../assets/SVGs/star.svg"
            v-for="i in 5"
            :key="i"
            class="h-[12px] w-[12px] md:h-[20px] md:w-[20px]"
            alt=""
          />
        </span>
      </h2>
      <p class="text-xs md:text-sm mt-1">
        80 Collyer quay, Marina Bay, Singapore, Singapore, 049326

        <span class="text-primary hover:underline cursor-pointer">
          (view map)
        </span>
      </p>
      <p
        :class="`text-sm text-medium-grey truncate xl:w-[500px] w-[300px] mt-2 hidden md:block`"
      >
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, eos
        hic molestias dignissimos quaerat minus harum rerum! Explicabo,
        accusamus veritatis!"
      </p>

      <LabelList class="mt-2 hidden md:flex" />
      <div class="gap-2 mt-3 hidden md:flex">
        <img src="../../assets/SVGs/health.svg" height="20" alt="" />
        <span class="text-sm">Singapore - SG Clean</span>
      </div>
      <div class="block md:hidden text-xs mt-1">
        <span class="font-bold"> 4.5 Excellent </span>
        <span> (12,345 reviews) </span>
      </div>
    </div>
    <!-- pricing section -->
    <div
      class="md:w-[160px] md:h-full absolute md:relative bottom-[10px] right-[10px] md:bottom-[0px] md:right-[0px] flex flex-col justify-between items-end"
    >
      <div></div>
      <div class="flex flex-col items-end">
        <p
          class="text-sm bg-secondary inline-block px-[5px] py-[2px] font-bold text-white"
        >
          Save 16% TODAY
        </p>
        <span class="text-medium-grey text-sm text-right mt-2"
          >Nightly avg.</span
        >
        <div class="flex items-end gap-2">
          <span class="text-medium-grey text-sm line-through">SGD 120</span>
          <span class="text-black font-bold xl:text-xl text-lg">SGD 100</span>
        </div>
      </div>
    </div>
  </section>
</template>
