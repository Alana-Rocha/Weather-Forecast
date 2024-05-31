import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { api } from "./api";
import { ErrorHandled } from "./types/errorHandled";
import { PrevisaoResponse } from "./types/previsao";

const consultarDados = async (cidade: string) => {
  const { data } = await api.get<PrevisaoResponse>("weather", {
    params: { q: cidade, units: "metric" },
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
