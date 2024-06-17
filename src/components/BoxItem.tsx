import { Flex, Text } from "@chakra-ui/react";

export type BoxItemProps = {
  icon: JSX.Element;
  label: string;
  value: string | number;
};

export const BoxItem = ({ icon, label, value, ...rest }: BoxItemProps) => {
  return (
    <Flex
      bg="rgba(250, 250, 250, 0.2)"
      p={5}
      w="115px"
      borderRadius="md"
      flexDir="column"
      alignItems="center"
      fontSize="0.8rem"
      {...rest}
      gap={1}
    >
      {icon}
      <Text>{label}</Text>
      <Text fontWeight="300">{value}</Text>
    </Flex>
  );
};
