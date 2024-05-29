import {
  FormControl,
  FormLabel,
  Input as InputChakra,
  InputProps as InputPropsChakra,
} from "@chakra-ui/react";
import { RefObject, memo } from "react";

type InputProps = {
  ref: RefObject<HTMLInputElement | null>;
  label: string;
  maxW?: string | number;
};

export const Input = memo(
  ({ ref, label, maxW, ...rest }: InputPropsChakra & InputProps) => {
    return (
      <FormControl maxW={maxW}>
        <FormLabel mb={0.5} fontSize="0.85rem" fontWeight="400">
          {label}
        </FormLabel>
        <InputChakra
          ref={ref}
          fontSize="0.9rem"
          bgColor="previsao.cinza_claro"
          borderRadius="10px"
          border="1px solid transparent"
          _hover={{}}
          _focusVisible={{ borderColor: "previsao.laranja" }}
          {...rest}
        />
      </FormControl>
    );
  }
);
