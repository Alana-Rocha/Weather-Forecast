import {
  FormControl,
  FormLabel,
  Input as InputChakra,
  InputProps as InputPropsChakra,
} from "@chakra-ui/react";
import { forwardRef, memo } from "react";

type InputProps = {
  label: string;
  maxW?: string | number;
};

export const Input = memo(
  forwardRef<HTMLInputElement, InputPropsChakra & InputProps>(
    ({ label, maxW, ...rest }, ref) => {
      return (
        <FormControl maxW={maxW}>
          {label && (
            <FormLabel fontSize="0.85rem" fontWeight="400">
              {label}
            </FormLabel>
          )}

          <InputChakra
            ref={ref}
            fontSize="0.9rem"
            bgColor="previsao.cinza_claro"
            borderRadius="10px"
            border="1px solid transparent"
            _hover={{}}
            p={5}
            _focusVisible={{ borderColor: "previsao.laranja" }}
            {...rest}
          />
        </FormControl>
      );
    }
  )
);
