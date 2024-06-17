import {
  FormControl,
  Input as InputChakra,
  InputProps as InputPropsChakra,
} from "@chakra-ui/react";
import { forwardRef, memo } from "react";

type InputProps = {
  maxW?: string | number;
};

export const Input = memo(
  forwardRef<HTMLInputElement, InputPropsChakra & InputProps>(
    ({ maxW, ...rest }, ref) => {
      return (
        <FormControl maxW={maxW}>
          <InputChakra
            ref={ref}
            fontSize="0.9rem"
            bgColor="weather.grey"
            borderRadius="10px"
            border="1px solid transparent"
            _hover={{}}
            p={5}
            _focusVisible={{ borderColor: "weather.orange" }}
            {...rest}
          />
        </FormControl>
      );
    }
  )
);
