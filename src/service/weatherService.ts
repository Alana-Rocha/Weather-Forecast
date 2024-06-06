import { apiCity, apiCoord } from "../utils/api";
import { CityResponse } from "./types/city";
import { CityNameResponse } from "./types/cityName";
import { WeatherResponse } from "./types/weather";

export const getCity = async (cidade: string) => {
  const { data } = await apiCity.get<CityResponse[]>("/direct", {
    params: { q: cidade },
  });
  return data;
};

export const getCityName = async (lat: number, lon: number) => {
  const { data } = await apiCity.get<CityNameResponse[]>("/reverse", {
    params: { lat, lon },
  });
  return data;
};

export const getWeatherData = async (lat: number, lon: number) => {
  const { data } = await apiCoord.get<WeatherResponse>("/onecall", {
    params: { lat, lon },
  });
  return data;
};
