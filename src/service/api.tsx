
import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/3.0/onecall",
  params: {
    appid: "0f683d1b74ab3aad4f0441ea3a01821b",
  },
});

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}