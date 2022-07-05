<script setup>
const links = [
  {
    name: "FAQ",
    url: "/faq",
  },
  {
    name: "Terms of use",
    url: "/terms-of-use",
  },
  {
    name: "Privacy policy",
    url: "/privacy-policy",
  },
  {
    name: "Contact us",
    url: "/contact-us",
  },
];
</script>
<template>
  <footer>
    <section
      class="bg-dark-grey h-[70px] text-white flex justify-center items-center gap-7 text-base"
    >
      <a v-for="(link, index) in links" :key="index" :href="link.url">
        {{ link.name }}
      </a>
    </section>
    <section
      class="bg-black h-[50px] flex justify-center items-center text-sm text-white"
    >
      Copyright CloudTravel 2021.
    </section>
  </footer>
</template>
