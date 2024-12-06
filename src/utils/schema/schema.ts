import { z } from "zod";

export const CitySchema = z.object({
  cityName: z.string().min(1, "Deve ter no mínimo um caractere"),
});

export type CityForm = z.infer<typeof CitySchema>;
