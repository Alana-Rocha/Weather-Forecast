type Weather = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Rain = {
  "1h": number;
};

type CurrentWeather = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
};

type MinutelyWeather = {
  dt: number;
  precipitation: number;
};

type HourlyWeather = {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  pop: number;
  rain?: Rain;
};

type DailyTemperature = {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
};

type DailyFeelsLike = {
  day: number;
  night: number;
  eve: number;
  morn: number;
};

type DailyWeather = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: DailyTemperature;
  feels_like: DailyFeelsLike;
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  rain?: number;
  uvi: number;
};

type Alert = {
  sender_name: string;
  event: string;
  start: number;
  end: number;
  description: string;
  tags: string[];
};

export type WeatherResponse = {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: CurrentWeather;
  minutely: MinutelyWeather[];
  hourly: HourlyWeather[];
  daily: DailyWeather[];
  alerts: Alert[];
};
