import { Box, Flex, Input } from "@chakra-ui/react";

// import { useCoordsStore } from "../stores/coords";

export const HomePage = () => {
  // const {
  //   states: { latitude, longitude },
  // } = useCoordsStore();

  return (
    <Flex height="100vh" justify="center" align="center">
      <Box>
        <Input></Input>
      </Box>
    </Flex>
  );
};
