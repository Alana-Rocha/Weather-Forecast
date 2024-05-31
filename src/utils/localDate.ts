import { DateTime } from "luxon";

export const localDate = DateTime.local()
  .setLocale("pt-BR")
  .toFormat("cccc, d LLL yyyy  hh:mm a");
