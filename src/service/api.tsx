
import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0/onecall",
  params: {
    appid: "a9e80247a0d68ccd9d2a8a8da46223cd",
  },
});

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}