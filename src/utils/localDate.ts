import { DateTime } from "luxon";

export const formatLocalTime = (dt: number, timezone: string) => {
  const utcMilliseconds = dt * 1000;
  const localDate = DateTime.fromMillis(utcMilliseconds, {
    zone: "utc",
  }).setZone(timezone);
  return localDate.toFormat("cccc, dd LLL yyyy | 'Local Time:' HH:mm");
};
