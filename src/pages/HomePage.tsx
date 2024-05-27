import { Divider, Flex, Text } from "@chakra-ui/react";
import { Box } from "../components/Box";
import { Input } from "../components/Input";
import { RiSearch2Line } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";
import { DataCard } from "../components/DataCard";

// import { useCoordsStore } from "../stores/coords";
type WeatherInfo = {
  label: string;
  value: string;
};

const data: WeatherInfo[] = [
  { label: "Temperatura", value: "32" },
  { label: "Índice UV", value: "Extremo" },
  { label: "Umidade", value: "20%" },
  { label: "Vento", value: "12%" },
];

export const HomePage = () => {
  // const {
  //   states: { latitude, longitude },
  // } = useCoordsStore();

  return (
    <Flex
      height="100vh"
      justify="center"
      align="center"
      bg="previsao.cinza_imagem"
    >
      <Box
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        p="20px"
        bg="linear-gradient(175deg, rgba(202,77,38,1) 0%, rgba(128,31,0,1) 100%);"
      >
        <Flex alignItems="center" gap={1}>
          <Input label="" placeholder="localização..." p={5} mr={2} />
          <Flex>
            <RiSearch2Line size="25px" color="#fff" />
          </Flex>
          <Flex>
            <GrLocation size="25px" color="#fff" />
          </Flex>
        </Flex>

        <Text>Sexta, 8 Dez 2023 | Horário Local: 09:26 AM</Text>
        <Text textTransform="uppercase">Cariacica, ES</Text>
        <Text>30 º C</Text>
        <Text>Limpo</Text>

        <Divider />

        <Flex alignItems="center">
          <Flex
            bg="rgba(250, 250, 250, 0.2)"
            p={4}
            borderRadius="md"
            flexDir="column"
            alignItems="center"
          >
            {data.map((item, index) => (
              <DataCard key={index} {...item} />
            ))}
            {/* <Text>Temperatura</Text>
            <Text>32</Text>
          </Flex>
          <Flex
            bg="rgba(250, 250, 250, 0.2)"
            p={4}
            borderRadius="md"
            flexDir="column"
            alignItems="center"
          >
            <Text>Ìndice UV</Text>
            <Text>Extremo</Text>
          </Flex>
          <Flex
            bg="rgba(250, 250, 250, 0.2)"
            p={4}
            borderRadius="md"
            flexDir="column"
            alignItems="center"
          >
            <Text>Umidade</Text>
            <Text>20%</Text>
          </Flex>
          <Flex
            bg="rgba(250, 250, 250, 0.2)"
            p={4}
            borderRadius="md"
            flexDir="column"
            alignItems="center"
          >
            <Text>Vento</Text>
            <Text>12%</Text> */}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};
