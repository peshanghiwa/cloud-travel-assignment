import axios from "../configs/axios";

export const getAutoSuggestions = async () =>
  await axios.get("/job01/autosuggest");
