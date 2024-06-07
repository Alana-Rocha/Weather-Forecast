import { DateTime } from "luxon";
import { ConsultarDadosResponse } from "../hooks/useMutationWeather";

export const formatLocalTime = (
  weatherData: ConsultarDadosResponse
): string => {
  const localTime = DateTime.fromSeconds(weatherData.current.dt)
    .setZone(`UTC${weatherData.timezone_offset / 3600}`)
    .setLocale("pt-BR");
  return localTime
    .toFormat("cccc, dd LLL yyyy | 'Horário Local:' hh:mm a", {
      locale: "pt-BR",
    })
    .replace(/^\w/, (c) => c.toUpperCase());
};

// import { DateTime } from "luxon";

// export const formatLocalTime = (dt: number, timezone: string) => {
//   const utcMilliseconds = dt * 1000;
//   const localDate = DateTime.fromMillis(utcMilliseconds, {
//     zone: "utc",
//   }).setZone(timezone);
//   return localDate.toFormat("cccc, dd LLL yyyy | 'Horário Local:' hh:mm a")
// };
