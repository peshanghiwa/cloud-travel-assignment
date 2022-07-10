import { reactive, toRefs, computed } from "vue";
import { getAutoSuggestions } from "../api/search";

const data = reactive({
  showLocationSearchModal: false,
  showSuggestions: false,
  locationSearchLoading: false,
  selectedLocation: "",
  fetched: false,
  locationSearchData: [],
});

const {
  showLocationSearchModal,
  locationSearchLoading,
  fetched,
  locationSearchData,
  showSuggestions,
  selectedLocation,
} = toRefs(data);

const fetchLocationSearch = async () => {
  try {
    if (fetched.value) return locationSearchData.value;

    locationSearchLoading.value = true;
    const res = await getAutoSuggestions();
    locationSearchData.value = res.data;
    locationSearchLoading.value = false;
    fetched.value = true;
  } catch (error) {
    locationSearchLoading.value = false;
    console.log(error);
    // ! we must have a toast here for the error message
  }
};

const onSelectCity = (cityCode) => {
  console.log(cityCode);
  // fetch properties based on cityCode
  // close location search
  // reset location search input
};

export default () => ({
  showLocationSearchModal,
  locationSearchLoading,
  fetched,
  locationSearchData,
  showSuggestions,
  selectedLocation,
  fetchLocationSearch,
  onSelectCity,
});
