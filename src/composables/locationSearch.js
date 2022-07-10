import { reactive, toRefs, computed } from "vue";
import { getAutoSuggestions, getProperties } from "../api/search";

const data = reactive({
  showLocationSearchModal: false,
  showSuggestions: false,
  locationSearchLoading: false,
  locationSearchInput: "",
  selectedCityCode: "sgsg",
  selectedCityName: "Singapore",
  selectedCityNameToShow: "Singapore",
  fetched: false,
  locationSearchData: [],
  properties: [],
  getPropertiesError: null,
  propertiesPagination: {
    page: 1,
    showing: [0, 20],
    totalItems: 0,
  },
  getProperiesLoading: true,
});

const {
  showLocationSearchModal,
  locationSearchLoading,
  fetched,
  locationSearchData,
  showSuggestions,
  locationSearchInput,
  selectedCityCode,
  selectedCityName,
  selectedCityNameToShow,
  properties,
  getProperiesLoading,
  propertiesPagination,
  getPropertiesError,
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

const generateImagesList = (gallery) => {
  /**
   * For maximum efficiency, we are going to sort all the images in the from xs to xl and then splice the very first 4 images to show
   * in the UI, with this method we accomplish the goal of finding 4 most optimized images,
   * rather than just selecting 4 randomly and show the smallest versions of them.
   */

  const values = {
    xs: [],
    s: [],
    m: [],
    lg: [],
    xl: [],
  };

  const sorted = [];
  gallery.forEach((image) => {
    if ("xs" in image) values.xs.push(image.xs.url);
    if ("s" in image) values.s.push(image.s.url);
    if ("m" in image) values.m.push(image.m.url);
    if ("lg" in image) values.lg.push(image.lg.url);
    if ("xl" in image) values.xl.push(image.xl.url);
  });
  sorted.push(
    ...values.xs,
    ...values.s,
    ...values.m,
    ...values.lg,
    ...values.xl
  );

  return sorted.splice(0, 4);
};

const generateLabels = (foodCode, freeCancellation, payLater, payAtHotel) => {
  const labels = [];
  const mealTimes = ["Breakfast", "Lunch", "Dinner"];

  // Food Code Mapping
  switch (foodCode) {
    case 1:
      labels.push("Room Only");
      break;

    case 2:
      labels.push(mealTimes[0]);
      break;

    case 3:
      labels.push(mealTimes[1]);
      break;

    case 4:
      labels.push(mealTimes[2]);
      break;

    case 5:
      labels.push(
        mealTimes[Math.floor(Math.random() * 2)], // randomly selecting one of the meals
        mealTimes[Math.floor(Math.random() * 2)]
      );
      break;

    case 6:
      labels.push(...mealTimes);
      break;

    case 7:
      return labels.push(...mealTimes, "Room Only");

    default:
      return [];
  }

  // Free Cancellation
  if (freeCancellation) {
    labels.push("Free Cancellation");
  }

  // Pay Later
  if (payLater) {
    labels.push("Pay Later");
  }

  // Pay At Hotel
  if (payAtHotel) {
    labels.push("Pay At Hotel");
  }

  /**
   * Warning:
   *  All of the properties have less than or maximum 3 labels in the api response.
   *  So I have manually added free wifi and free parking labels to the labels array down below so that there will be more than 3 labels in the UI for some of the properties. (This is mandetory to show the other hidden labels in the + button as requested in the )
   */
  labels.push("Free WiFi");
  labels.push("Free Parking");

  return labels;
};

const calculateDiscount = (originalPrice, discountedPrice) => {
  const discount = (originalPrice - discountedPrice) / originalPrice;
  return Math.round(discount * 100);
};

const generateLocation = (location) => {
  return `${location.address}, ${location.country}, ${location.city} ${location.postalCode}`;
};

const formatPropertiesData = (results) => {
  return results.map((result, index) => ({
    id: index,
    title: result.property.name,
    stars: result.property.starRating,
    location: generateLocation(result.property.location),
    comment: result.property.reviews?.summary?.text || null,
    labels: generateLabels(
      result.packages[0].foodCode,
      result.packages[0].nonRefundable,
      result.packages[0].payLater,
      result.packages[0].payAtHotel
    ),
    health: result.property?.covidSafety || null,
    mainImage: result.property.heroImage.url,
    images: generateImagesList(result.property.gallery), // not completed yet
    price: result.packages[0].displayRate.value,
    discount: calculateDiscount(
      result.packages[0].displayRate.value,
      result.packages[0].adjustedDisplayRate.value
    ),
  }));
};

const searchProperties = async () => {
  if (!selectedCityCode.value) return;
  try {
    getProperiesLoading.value = true;
    selectedCityNameToShow.value = selectedCityName.value;
    const { data } = await getProperties(selectedCityCode.value);
    const { results, pagination } = data.outlets.availability;
    properties.value = formatPropertiesData(results);
    propertiesPagination.value = pagination;
    getProperiesLoading.value = false;
    if (showLocationSearchModal.value) {
      showLocationSearchModal.value = false;
    }
  } catch (error) {
    getProperiesLoading.value = false;
    getPropertiesError.value = error.response.data.message;
    if (showLocationSearchModal.value) {
      showLocationSearchModal.value = false;
    }
    return [];
  }
};

// initial website fetch request
const initRequest = async () => {
  await searchProperties();
  selectedCityCode.value = "";
};

const onSelectCity = async (cityCode) => {
  const selectedCity = locationSearchData.value.find(
    (item) => item.cityCode === cityCode
  );

  locationSearchInput.value = selectedCity.label;
  selectedCityName.value = selectedCity.label.split(",")[0];

  selectedCityCode.value = cityCode;
};

const filteredLocationSearchData = computed(() => {
  if (!locationSearchInput.value) return locationSearchData.value;

  const input = locationSearchInput.value.toLowerCase();
  return locationSearchData.value.filter((item) =>
    item.label.toLowerCase().includes(input)
  );
});

export default () => ({
  showLocationSearchModal,
  locationSearchLoading,
  fetched,
  locationSearchData,
  showSuggestions,
  locationSearchInput,
  fetchLocationSearch,
  onSelectCity,
  searchProperties,
  selectedCityNameToShow,
  properties,
  propertiesPagination,
  filteredLocationSearchData,
  getProperiesLoading,
  getPropertiesError,
  initRequest,
});
