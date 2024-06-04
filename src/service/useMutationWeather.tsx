import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { apiCity, apiCoord } from "./api";
import { CityResponse } from "./types/city";
import { ErrorHandled } from "./types/errorHandled";
import { WeatherResponse } from "./types/weather";

type Params = {
  cidade?: string;
  coordenada?: string;
};

export type ConsultarDadosResponse = {
  cityName: string;
} & WeatherResponse;

const consultarDados = async ({
  cidade,
  coordenada,
}: Params): Promise<ConsultarDadosResponse> => {
  let cityName = "";
  if (cidade) {
    const { data } = await apiCity.get<CityResponse[]>("/direct", {
      params: { q: cidade },
    });
    cityName = data[0].name;
    coordenada = `${data[0].lat},${data[0].lon}`;
    // console.log(data);
  }

  if (!coordenada) return {} as ConsultarDadosResponse;

  const [lat, lon] = coordenada.split(",");

  const { data } = await apiCoord.get<WeatherResponse>("/onecall", {
    params: { lat: lat.replace(" ", ""), lon: lon.replace(" ", "") },
  });
  return { cityName, ...data };
};

export const useMutationWeather = () => {
  const toast = useToast();

  return useMutation(consultarDados, {
    onError: (error: AxiosError<ErrorHandled>) => {
      toast({
        status: "error",
        isClosable: true,
        duration: 3000,
        // position: "bottom",
        title: "Ocorreu um erro ao buscar cidade",
        description: error.response?.data.message,
      });
    },
  });
};
