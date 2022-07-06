<script setup></script>

<template>
  <div class="min-h-screen grid place-items-center bg-primary">
    <div class="flex flex-col w-96 bg-white shadow-xl rounded-lg px-6 py-4">
      <h1 class="text-3xl font-bold text-gray-800 mb-1">Price Range</h1>
      <p class="font-semibold text-lg text-gray-700">
        Use slider or enter min and max price
      </p>

      <div class="flex justify-between items-center my-6">
        <div class="rounded-md">
          <span class="p-2 font-semibold"> Min</span>
          <input />
        </div>
        <div class="ml-2 font-semibold text-lg">-</div>
        <div class=" ">
          <span class="p-2 font-semibold"> Max</span>
          <input />
        </div>
      </div>

      <div class="mb-4">
        <div class="slider relative h-1 rounded-md bg-gray-300">
          <div
            class="progress absolute h-1 bg-primary rounded"
            ref="{progressRef}"
          ></div>
        </div>

        <div class="range-input relative">
          <input
            onChange="{handleMin}"
            type="range"
            min="{min}"
            step="{step}"
            max="{max}"
            value="{minValue}"
            class="range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />

          <input
            onChange="{handleMax}"
            type="range"
            min="{min}"
            step="{step}"
            max="{max}"
            value="{maxValue}"
            class="range-max absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  pointer-events: all;
  width: 24px;
  height: 24px;
  -webkit-appearance: none;
  /* @apply w-6 h-6 appearance-none pointer-events-auto; */
}
</style>
