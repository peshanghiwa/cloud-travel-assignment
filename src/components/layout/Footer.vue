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
      class="bg-dark-grey h-[50px] md:h-[70px] text-white flex justify-center items-center gap-7 text-sm md:text-base"
    >
      <a v-for="(link, index) in links" :key="index" :href="link.url">
        {{ link.name }}
      </a>
    </section>
    <section
      class="bg-black h-[30px] md:h-[50px] flex justify-center items-center text-xs md:text-sm text-white"
    >
      Copyright CloudTravel 2021.
    </section>
  </footer>
</template>
