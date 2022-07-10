import axios from "axios";

export default axios.create({
  baseURL: "https://hiring.zumata.xyz",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
