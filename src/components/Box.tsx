import { Flex, FlexProps } from "@chakra-ui/react";
import { memo } from "react";

export const Box = memo(
  ({ children, ...rest }: React.PropsWithChildren<FlexProps>) => {
    return (
      <Flex
        bgColor="weather.white"
        borderRadius="25"
        boxShadow="base"
        {...rest}
      >
        {children}
      </Flex>
    );
  }
);
