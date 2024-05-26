import { Flex } from "@chakra-ui/react";
import { Box } from "../components/Box";
import { Input } from "../components/Input";
import { RiSearch2Line } from "react-icons/ri";
import { GrLocation } from "react-icons/gr";

// import { useCoordsStore } from "../stores/coords";

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
      </Box>
    </Flex>
  );
};
