import { Flex, Heading } from "@chakra-ui/react";
import { useCoordsStore } from "../stores/coords";

export const CoordsErroPage = () => {
  const {
    states: { erro },
  } = useCoordsStore();

  return (
    <Flex>
      <Heading>{erro}</Heading>
    </Flex>
  );
};
