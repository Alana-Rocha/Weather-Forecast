import { Divider, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { GrLocation } from "react-icons/gr";
import { PiCircleLight, PiDropSimpleLight, PiWindLight } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";
import { Box } from "../components/Box";
import { BoxItem } from "../components/BoxItem";
import { Input } from "../components/Input";
import {
  ConsultarDadosResponse,
  useMutationWeather,
} from "../hooks/useMutationWeather";
import { useCoordsStore } from "../stores/coords";
import { mascaraTemperatura } from "../utils/conversao";
import { formatLocalTime } from "../utils/localDate";

export const HomePage = () => {
  const { mutateAsync, isLoading } = useMutationWeather();
  const inputRef = useRef<HTMLInputElement>(null);
  const [weatherData, setWeatherData] = useState({} as ConsultarDadosResponse);

  const [latitude, longitude] = useCoordsStore((s) => [
    s.states.latitude,
    s.states.longitude,
  ]);

  useEffect(() => {
    (async () => {
      await mutateAsync(
        { coordenada: `${latitude},${longitude}` },
        {
          onSuccess: (data) => {
            setWeatherData(data);
          },
        }
      );
    })();
  }, [latitude, longitude, mutateAsync]);

  const searchLocation = async () => {
    await mutateAsync(
      { cidade: inputRef.current?.value || "" },
      {
        onSuccess: (data) => {
          setWeatherData(data);
        },
      }
    );
  };

  // useEffect(() => {
  //   if (!weatherData?.timezone) return;
  //   console.log(
  //     DateTime.fromSeconds(weatherData?.current?.dt, { zone: "utc" })
  //       .plus({ seconds: weatherData?.timezone_offset })
  //       .toFormat("HH:mm dd-MM-yyyy")
  //   );
  // }, [weatherData]);

  return (
    <Flex
      height="100vh"
      justify="center"
      align="center"
      bg="previsao.cinza_imagem"
    >
      <Box
        flexDir="column"
        p={6}
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
              onClick={searchLocation}
              cursor="pointer"
            />
          )}

          <GrLocation
            size="27px"
            color="#fff"
            // onClick={currentLocation}
            cursor="pointer"
          />
        </Flex>

        {weatherData.current && (
          <>
            <Flex
              flexDir="column"
              gap={5}
              alignItems="center"
              fontSize="1.2rem"
            >
              <Text fontSize="0.9rem" fontWeight="300" color="#000">
                {formatLocalTime(weatherData)}
              </Text>
              <Flex alignItems="center" gap={3}>
                <Text textTransform="capitalize">{`${weatherData.cityName}`}</Text>
                <Image
                  src={`https://flagsapi.com/${weatherData.countryAcronym}/flat/32.png`}
                />
              </Flex>
              <Text fontSize="4rem" textShadow="#0000003d 0px 4px 4px">
                {weatherData?.hourly &&
                  mascaraTemperatura(Math.floor(weatherData?.hourly[0].temp))}
              </Text>
              <Flex alignItems="center">
                <Text fontWeight="300" textTransform="capitalize">
                  {weatherData?.current?.weather &&
                    weatherData?.current?.weather[0]?.description}
                </Text>
                {weatherData?.current?.weather && (
                  <Image
                    src={`http://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`}
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
                  icon={<PiWindLight size="27px" />}
                  label={"Vento"}
                  value={`${weatherData?.current?.wind_speed} km/h`}
                />
                <BoxItem
                  icon={<PiDropSimpleLight size="27px" />}
                  label={"Umidade"}
                  value={`${weatherData?.current?.humidity}%`}
                />
                <BoxItem
                  icon={<PiCircleLight size="27px" />}
                  label={"Índice UV"}
                  value={`${weatherData?.current?.uvi}`}
                />
              </Flex>
            </Flex>
          </>
        )}
      </Box>
    </Flex>
  );
};
