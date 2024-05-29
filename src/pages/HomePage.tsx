import { Divider, Flex, Spinner, Text } from "@chakra-ui/react";
import { useRef } from "react";
import { BsThermometerHigh } from "react-icons/bs";
import { FiWind } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { PiDropBold } from "react-icons/pi";
import { RiCheckboxBlankCircleLine, RiSearch2Line } from "react-icons/ri";
import { Box } from "../components/Box";
import { Input } from "../components/Input";
import { useMutationWeather } from "../service/useMutationWeather";
import { mascaraTemperatura } from "../utils/conversao";
import { BoxItem } from "./BoxItem";

// import { useCoordsStore } from "../stores/coords";
// type WeatherInfo = {
//   label: string;
//   value: string;
// };

export const HomePage = () => {
  const { mutateAsync, isLoading } = useMutationWeather();
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = async () => {
    await mutateAsync(inputRef.current?.value || "");
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
        alignItems="center"
        justifyContent="center"
        p={8}
        gap={10}
        bg="linear-gradient(175deg, rgba(202,77,38,1) 0%, rgba(128,31,0,1) 100%);"
      >
        <Flex w="100%" alignItems="center" justifyContent="space-between" gap={2}>
          <Input
            ref={inputRef}
            label=""
            color="#000"
            placeholder="Digite o nome da cidade..."
            w="350px"
            p={6}
          />
          {isLoading ? (
            <Spinner />
          ) : (
            <RiSearch2Line
              size="30px"
              color="#fff"
              onClick={submit}
              cursor="pointer"
            />
          )}

          <GrLocation size="30px" color="#fff" />
        </Flex>

        <Flex flexDir="column" gap={5} alignItems="center" fontSize="1.2rem">
          <Text fontSize="1rem" fontWeight="300">
            Sexta, 8 Dez 2023 | Horário Local: 09:26 AM
          </Text>
          <Text textTransform="uppercase">Cariacica, ES</Text>
          <Text fontSize="4rem" textShadow="#0000003d 0px 4px 4px">
            {mascaraTemperatura(30)}
          </Text>
          <Text fontWeight="300">Limpo</Text>
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
              icon={<BsThermometerHigh size="30px" />}
              label={"Temperatura"}
              value={"32%"}
            />
            <BoxItem
              icon={<RiCheckboxBlankCircleLine size="30px" />}
              label={"Ìndice UV"}
              value={"Extremo"}
            />
            <BoxItem
              icon={<PiDropBold size="30px" />}
              label={"Umidade"}
              value={"20%"}
            />
            <BoxItem
              icon={<FiWind size="30px" />}
              label={"Vento"}
              value={"12%"}
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
