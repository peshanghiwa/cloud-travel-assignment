<script setup>
import Card from "../utility/Card.vue";
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
    </aside>

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
