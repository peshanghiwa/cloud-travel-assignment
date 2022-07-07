import { reactive, toRefs, computed } from "vue";

const data = reactive({
  showSortbyFilters: false,
  selectedSortby: 1,
  sortByOptions: [
    { id: 1, text: "Price (lowest first)" },
    { id: 2, text: "Price (highest first)" },
  ],
});

const { selectedSortby, sortByOptions, showSortbyFilters } = toRefs(data);

const sortbyOptionsList = computed(() => {
  return sortByOptions.value.filter((option) => {
    return option.id !== selectedSortby.value;
  });
});

const selectedSortbyOption = computed(() => {
  return sortByOptions.value.find((option) => {
    return option.id === selectedSortby.value;
  });
});

const onSelectSortby = (value) => {
  selectedSortby.value = value;
  showSortbyFilters.value = false;
};

export default () => ({
  sortbyOptionsList,
  selectedSortbyOption,
  showSortbyFilters,
  onSelectSortby,
});
