import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as InputChakra,
  InputGroup,
  InputLeftElement,
  InputProps as InputPropsChakra,
} from "@chakra-ui/react";
import { memo } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

type InputProps = {
  label: string;
  isReadOnly?: boolean;
  maxW?: string | number;
  inputLeftElement?: JSX.Element;
  isLoading?: boolean;
  validation?: RegisterOptions;
  showSubmit?: boolean;
  onSubmit?: () => void;
};

export const Input = memo(
  ({
    id,
    label,
    maxW,
    isRequired,
    isReadOnly,
    inputLeftElement,
    isLoading,
    validation,
    showSubmit,
    onSubmit,
    ...rest
  }: InputPropsChakra & InputProps) => {
    const methods = useFormContext();

    return (
      <FormControl
        maxW={rest.type === "date" ? "180px" : maxW}
        isInvalid={id ? !!methods.formState.errors[id] : false}
        isRequired={isRequired}
        isReadOnly={isReadOnly || isLoading}
      >
        <FormLabel mb={0.5} fontSize="0.85rem" fontWeight="400">
          {label}
        </FormLabel>
        <InputGroup>
          {inputLeftElement && (
            <InputLeftElement width="2.5rem">
              {inputLeftElement}
            </InputLeftElement>
          )}

          {id ? (
            <InputChakra
              fontSize="0.9rem"
              bgColor="previsao.cinza_claro"
              borderRadius="10px"
              borderRightRadius={showSubmit ? "0" : "12px"}
              border="1px solid transparent"
              _hover={{}}
              _focusVisible={{ borderColor: "previsao.laranja" }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && onSubmit && !isLoading) onSubmit();
              }}
              {...methods.register(id, validation)}
              {...rest}
            />
          ) : (
            <InputChakra
              fontSize="0.9rem"
              bgColor="previsao.cinza_claro"
              borderRadius="12px"
              borderRightRadius={showSubmit ? "0" : "12px"}
              border="1px solid transparent"
              _hover={{}}
              _focusVisible={{ borderColor: "previsao.azul" }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && onSubmit && !isLoading) onSubmit();
              }}
              {...rest}
            />
          )}
        </InputGroup>

        {id && (
          <FormErrorMessage mt={-0.3} fontSize="0.7rem">
            {methods.formState.errors[id]?.message?.toString()}
          </FormErrorMessage>
        )}
      </FormControl>
    );
  }
);
