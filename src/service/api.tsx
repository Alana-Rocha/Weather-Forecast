import axios from "axios";

const apiKey = import.meta.env.VITE_APP_OPENWEATHER_API_KEY;

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: { appid: apiKey, lang: "pt_br" },
});
