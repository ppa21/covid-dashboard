import axios from "axios";

const covid = axios.create({
  baseURL: "https://api.covid19api.com",
});

export default covid;
