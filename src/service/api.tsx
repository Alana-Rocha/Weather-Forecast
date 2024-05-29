import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: { appid: "fa40971ab26fd7aa79315053482ddc96", lang: "pt_br" },
});
