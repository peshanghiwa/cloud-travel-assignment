<script setup>
const data = [
  { label: "Singapore, Singapore", cityCode: "sgsg" },
  { label: "Kuala Lumpur, Malaysia", cityCode: "klmy" },
  { label: "Manila, Philippines", cityCode: "mlph" },
];
</script>

<template>
  <div
    class="text-white h-[70px] bg-primary px-[3%] md:px-[8%] flex items-center"
  >
    <div class="relative custom-border rounded border-light-grey">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <button
          type="submit"
          class="p-1 focus:outline-none focus:shadow-outline"
        >
          <img
            src="../../assets/SVGs/search.svg"
            height="15"
            width="15"
            alt=""
            srcset=""
          />
        </button>
      </span>
      <input
        type="text"
        name="q"
        class="w-[400px] h-[50px] py-2 text-base text-black rounded-sm pl-10 outline-none"
        placeholder="Singapore, Singapore"
        autocomplete="off"
      />
      <div
        v-if="false"
        class="absolute custom-border rounded top-16 left-0 bg-white border-light-grey w-[100%] text-black"
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
    </div>
  </div>
</template>

<style>
.custom-border {
  border-width: 1px;
}
</style>
