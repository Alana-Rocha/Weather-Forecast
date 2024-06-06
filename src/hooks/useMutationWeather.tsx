import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { ErrorHandled } from "../service/types/errorHandled";
import { WeatherResponse } from "../service/types/weather";
import {
  getCity,
  getCityName,
  getWeatherData,
} from "../service/weatherService";

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
  let lat = coordenada ? +coordenada?.split(",")[0]?.replace(" ", "") : 0;
  let lon = coordenada ? +coordenada?.split(",")[1]?.replace(" ", "") : 0;

  if (cidade) {
    const data = await getCity(cidade);
    cityName = data[0].name;
    lat = data[0].lat;
    lon = data[0].lon;
  }
  console.log({ cidade, coordenada });
  if (!cidade) {
    const data = await getCityName(lat, lon);
    cityName = data[0].name;
    lat = data[0].lat;
    lon = data[0].lon;
  }

  const data = await getWeatherData(lat, lon);

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
        title: "Ocorreu um erro ao buscar cidade",
        description: error.response?.data.message,
      });
    },
  });
};
