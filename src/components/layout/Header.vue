<script setup>
import { computed, reactive, toRefs } from "vue";

const data = reactive({
  languages: [
    {
      name: "English",
      selected: true,
    },
    {
      name: "Español",
      selected: false,
    },
    {
      name: "Français",
      selected: false,
    },
    {
      name: "Deutsch",
      selected: false,
    },
  ],
  currencies: [
    {
      name: "USD",
      selected: true,
    },
    {
      name: "EUR",
      selected: false,
    },
    {
      name: "GBP",
      selected: false,
    },
    {
      name: "JPY",
      selected: false,
    },
  ],
  showLanguagesDropdown: false,
  showCurrenciesDropdown: false,
  showSidebar: false,
});

const {
  languages,
  currencies,
  showLanguagesDropdown,
  showCurrenciesDropdown,
  showSidebar,
} = toRefs(data);

const onOutsideSidebarClick = () => {
  if (showSidebar.value) showSidebar.value = false;
};
// languages dropdown logic
const renderedLanguages = computed(() =>
  languages.value.filter((language) => !language.selected)
);
const selectedLanguage = computed(() =>
  languages.value.find((language) => language.selected)
);
const changeLanguage = (language) => {
  languages.value.forEach((l) => (l.selected = false));
  language.selected = true;
  showLanguagesDropdown.value = false;
};

// currency dropdown logic
const renderedCurrencies = computed(() =>
  currencies.value.filter((currency) => !currency.selected)
);
const selectedCurrency = computed(() =>
  currencies.value.find((currency) => currency.selected)
);
const changeCurrency = (currency) => {
  currencies.value.forEach((c) => (c.selected = false));
  currency.selected = true;
  showCurrenciesDropdown.value = false;
};
</script>

<template>
  <header class="bg-white border-b-2 md:border-none border-light-grey">
    <div
      class="w-full px-3 md:px-0 md:w-[85%] mx-auto h-[60px] flex items-center justify-between"
    >
      <img
        src="../../assets/SVGs/logo.svg"
        class="h-[25px] md:h-[35px]"
        alt="Cloud Travel Logo"
      />
      <!-- Large Screen Only -->
      <ul class="hidden md:flex gap-x-4 z-100">
        <li>
          <button
            class="px-3 py-1.5 text-black text-lg transition duration-150 ease-in-out flex items-center"
            type="button"
            @click="showLanguagesDropdown = !showLanguagesDropdown"
          >
            {{ selectedLanguage.name }}
            <img
              src="../../assets/SVGs/arrow-down.svg"
              class="w-2 ml-2"
              height="30"
              width="30"
              alt="Arrow Down"
            />
          </button>
          <ul
            class="absolute text-base py-1 list-none shadow-lg m-0"
            v-if="showLanguagesDropdown"
          >
            <li
              v-for="(language, index) in renderedLanguages"
              :key="index"
              class="dropdown-item cursor-pointer text-lg py-2 px-4 bg-transparent transition duration-150 text-black bg-white hover:bg-light-grey"
              @click="changeLanguage(language)"
            >
              {{ language.name }}
            </li>
          </ul>
        </li>
        <li>
          <button
            class="px-3 py-1.5 text-black text-lg transition duration-150 ease-in-out flex items-center"
            type="button"
            @click="showCurrenciesDropdown = !showCurrenciesDropdown"
          >
            {{ selectedCurrency.name }}
            <img
              src="../../assets/SVGs/arrow-down.svg"
              class="w-2 ml-2"
              height="30"
              width="30"
              alt=""
            />
          </button>
          <ul
            class="absolute text-base py-1 list-none shadow-lg m-0"
            v-if="showCurrenciesDropdown"
          >
            <li
              v-for="(currency, index) in renderedCurrencies"
              :key="index"
              class="dropdown-item cursor-pointer text-lg py-2 px-4 bg-transparent transition duration-150 text-black bg-white hover:bg-light-grey"
              @click="changeCurrency(currency)"
            >
              {{ currency.name }}
            </li>
          </ul>
        </li>
        <li>
          <button class="px-3 py-1.5">My Account</button>
        </li>
        <li>
          <button class="px-3 py-1.5">Log Out</button>
        </li>
      </ul>

      <!-- Mobile Screen Only -->
      <div class="block md:hidden">
        <button @click="showSidebar = !showSidebar">
          <img
            src="../../assets/SVGs/burger-menu.svg"
            class="h-[18px]"
            alt="Burger Menu"
            srcset=""
          />
        </button>
        <div
          class="overflow-y-auto absolute right-2 w-[180px] py-4 px-3 bg-dark-grey rounded shadow-sm z-50"
          v-if="showSidebar"
          v-click-outside="onOutsideSidebarClick"
        >
          <ul class="space-y-2">
            <li>
              <button
                type="button"
                class="flex items-center p-2 w-full text-lg text-white rounded-lg transition duration-75 group hover:bg-secondary"
                @click="showLanguagesDropdown = !showLanguagesDropdown"
              >
                <span class="flex-1 text-left whitespace-nowrap">{{
                  selectedLanguage.name
                }}</span>
                <svg
                  class="w-6 h-6 transform transition duration-200"
                  :class="[showLanguagesDropdown ? 'rotate-180' : '']"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul v-if="showLanguagesDropdown" class="py-2 space-y-2">
                <li v-for="(language, index) in renderedLanguages" :key="index">
                  <button
                    @click="changeLanguage(language)"
                    class="flex items-center justify-center p-2 w-full text-base text-white rounded-lg transition duration-75 group hover:bg-secondary"
                  >
                    {{ language.name }}
                  </button>
                </li>
              </ul>
            </li>

            <li>
              <button
                type="button"
                class="flex items-center p-2 w-full text-lg text-white rounded-lg transition duration-75 group hover:bg-secondary"
                @click="showCurrenciesDropdown = !showCurrenciesDropdown"
              >
                <span class="flex-1 text-left whitespace-nowrap">{{
                  selectedCurrency.name
                }}</span>
                <svg
                  class="w-6 h-6 transform transition duration-200"
                  :class="[showCurrenciesDropdown ? 'rotate-180' : '']"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul v-if="showCurrenciesDropdown" class="py-2 space-y-2">
                <li
                  v-for="(currency, index) in renderedCurrencies"
                  :key="index"
                >
                  <button
                    @click="changeCurrency(currency)"
                    class="flex items-center justify-center p-2 w-full text-base text-white rounded-lg transition duration-75 group hover:bg-secondary"
                  >
                    {{ currency.name }}
                  </button>
                </li>
              </ul>
            </li>

            <li class="">
              <button
                class="flex items-center p-2 text-lg rounded-lg text-white hover:bg-secondary w-full"
              >
                My Account
              </button>
            </li>
            <li class="">
              <button
                class="flex items-center p-2 text-lg rounded-lg text-white hover:bg-secondary w-full"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<style></style>
