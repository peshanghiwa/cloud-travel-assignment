import axios from "../configs/axios";

export const getAutoSuggestions = async () =>
  await axios.get("/job01/autosuggest");

export const getProperties = async (cityCode) =>
  await axios.get(`/job01/search/${cityCode}`);
