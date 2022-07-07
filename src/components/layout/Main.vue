<script setup>
import Aside from "../main/Aside.vue";
</script>

<template>
  <main
    class="custom-size w-full px-0 md:px-3 lg:px-0 lg:w-[85%] mx-auto flex flex-col lg:flex-row my-0 lg:my-[30px] gap-x-4"
  >
    <Aside />
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
