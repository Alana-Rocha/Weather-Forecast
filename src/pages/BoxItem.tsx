import { Flex, Text } from "@chakra-ui/react";

export type BoxItemProps = {
  icon: JSX.Element;
  label: string;
  value: string;
  //   maxW?: string;
};

export const BoxItem = ({ icon, label, value, ...rest }: BoxItemProps) => {
  return (
    <Flex
      bg="rgba(250, 250, 250, 0.2)"
      p={5}
      borderRadius="md"
      flexDir="column"
      alignItems="center"
      w="110px"
      fontSize="0.8rem"
      {...rest}
    >
      {icon}
      <Text>{label}</Text>
      <Text>{value}</Text>
    </Flex>
  );
};
