import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { apiCity, apiCoord } from "./api";
import { CityResponse } from "./types/city";
import { ErrorHandled } from "./types/errorHandled";

type Params = {
  cidade?: string;
  coordenada?: string;
};

const consultarDados = async ({ cidade, coordenada }: Params) => {
  if (cidade) {
    const { data } = await apiCity.get<CityResponse>("/direct", {
      params: { q: cidade },
    });

    coordenada = `${data.lat},${data.lon}`;
  }

  if (!coordenada) return;

  const [lat, lon] = coordenada.split(",");

  const { data } = await apiCoord.get("/onecall", {
    params: { lat: lat.replace(" ", ""), lon: lon.replace(" ", "") },
  });
  console.log(data);
  return data;
};

export const useMutationWeather = () => {
  const toast = useToast();

  return useMutation(consultarDados, {
    onError: (error: AxiosError<ErrorHandled>) => {
      toast({
        status: "error",
        isClosable: true,
        duration: 3000,
        position: "bottom",
        title: "Ocorreu um erro ao buscar cidade",
        description: error.response?.data.message,
      });
    },
  });
};
