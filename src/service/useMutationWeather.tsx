import { useMutation } from "react-query";
import { api } from "./api";
import { PrevisaoResponse } from "./previsaoType";

const consultarDados = async (cidade: string) => {
  const { data } = await api.get<PrevisaoResponse>("weather", {
    params: { q: cidade, units: "metric" },
  });

  console.log(data);
  return data;
};

export const useMutationWeather = () => {
  return useMutation(consultarDados);
};
