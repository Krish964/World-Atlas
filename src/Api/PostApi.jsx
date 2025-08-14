import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com"
});

export const getCountryData = () => {
  return api.get("/v3.1/all?fields=name,capital,population,languages,flags,region"); // sirf endpoint
};
