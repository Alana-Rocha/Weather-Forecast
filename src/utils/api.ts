import axios from "axios";

const apiKey = import.meta.env.VITE_APP_OPENWEATHER_API_KEY;

export const apiCity = axios.create({
  baseURL: "https://api.openweathermap.org/geo/1.0",
  params: { appid: apiKey, lang: "pt-BR" },
});

export const apiCoord = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0",
  params: { appid: apiKey, units: "metric" },
});
