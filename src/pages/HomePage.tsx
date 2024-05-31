import { Divider, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FiWind } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { PiDropBold } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";
import { TbWashTemperature4 } from "react-icons/tb";
import { Box } from "../components/Box";
import { Input } from "../components/Input";
import { PrevisaoResponse } from "../service/types/weather";
import { useMutationWeather } from "../service/useMutationWeather";
import { mascaraTemperatura } from "../utils/conversao";
import { localDate } from "../utils/localDate";
import { BoxItem } from "./BoxItem";

// import { useCoordsStore } from "../stores/coords";
// type WeatherInfo = {
//   label: string;
//   value: string;
// };

export const HomePage = () => {
  const { mutateAsync, isLoading } = useMutationWeather();
  const inputRef = useRef<HTMLInputElement>(null);
  const [weatherData, setWeatherData] = useState({} as PrevisaoResponse);

  const submit = async () => {
    await mutateAsync(inputRef.current?.value || "", {
      onSuccess: (data) => {
        setWeatherData(data);
      },
    });
    console.log();
  };

  return (
    <Flex
      height="100vh"
      justify="center"
      align="center"
      bg="previsao.cinza_imagem"
    >
      <Box
        minH="600px"
        flexDir="column"
        p={7}
        gap={10}
        bg="linear-gradient(175deg, rgba(202,77,38,1) 0%, rgba(128,31,0,1) 100%);"
      >
        <Flex alignItems="center" justifyContent="center" gap={2}>
          <Input
            maxW="300px"
            ref={inputRef}
            label=""
            color="#000"
            placeholder="Digite o nome da cidade..."
          />
          {isLoading ? (
            <Spinner />
          ) : (
            <RiSearch2Line
              size="27px"
              color="#fff"
              onClick={submit}
              cursor="pointer"
            />
          )}

          <GrLocation size="27px" color="#fff" />
        </Flex>

        <Flex flexDir="column" gap={5} alignItems="center" fontSize="1.2rem">
          <Text fontSize="1rem" fontWeight="300">
            {localDate}
          </Text>
          <Text textTransform="capitalize">{weatherData?.name}</Text>

          <Text fontSize="4rem" textShadow="#0000003d 0px 4px 4px">
            {mascaraTemperatura(Math.floor(weatherData?.main?.temp))}
          </Text>
          <Flex alignItems="center">
            <Text fontWeight="300" textTransform="capitalize">
              {weatherData?.weather && weatherData?.weather[0]?.description}
            </Text>
            {weatherData?.weather && (
              <Image
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              />
            )}
          </Flex>
        </Flex>

        <Flex
          alignItems="center"
          flexDir="column"
          justifyContent="center"
          gap={5}
          p={2}
        >
          <Divider />
          <Flex gap={3}>
            <BoxItem
              icon={<FiWind size="27px" />}
              label={"Vento"}
              value={`${weatherData?.wind?.speed} km/h`}
            />
            <BoxItem
              icon={<PiDropBold size="27px" />}
              label={"Umidade"}
              value={`${weatherData?.main?.humidity}%`}
            />
            <BoxItem
              icon={<TbWashTemperature4 size="27px" />}
              label={"Pressão"}
              value={`${weatherData?.main?.pressure} hPA`}
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
