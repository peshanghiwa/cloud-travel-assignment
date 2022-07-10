<script setup>
import Header from "./components/layout/Header.vue";
import Navbar from "./components/layout/Navbar.vue";
import Footer from "./components/layout/Footer.vue";
import Main from "./components/layout/Main.vue";
import { onMounted } from "vue";
import locationSearch from "./composables/locationSearch";

const { initRequest } = locationSearch();

onMounted(async () => {
  await initRequest();
});
</script>

<template>
  <Header />
  <Navbar />
  <Main />
  <Footer />
</template>

<style>
#app {
  background-color: #f5f5f5;
}
</style>
