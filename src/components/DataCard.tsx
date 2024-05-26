import { Flex, Text } from "@chakra-ui/react";
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

export const DataCard: React.FC<WeatherInfo> = ({ label, value }) => {
  return (
    <Flex
      bg="rgba(250, 250, 250, 0.2)"
      p={4}
      borderRadius="md"
      flexDir="column"
      alignItems="center"
      m={2}
    >
      <Text>{label}</Text>
      <Text>{value}</Text>
    </Flex>
  );
};
