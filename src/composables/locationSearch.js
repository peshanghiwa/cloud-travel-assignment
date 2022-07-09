import { reactive, toRefs, computed } from "vue";

const data = reactive({
  showLocationSearch: false,
});

const { showLocationSearch } = toRefs(data);

export default () => ({
  showLocationSearch,
});
