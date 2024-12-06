import {
  FormControl,
  FormErrorMessage,
  Input as InputChakra,
  InputProps as InputPropsChakra,
} from "@chakra-ui/react";

import { Controller, useFormContext } from "react-hook-form";

type InputProps = {
  maxW?: string | number;
  id: string;
};

export const Input = ({ id, ...rest }: InputPropsChakra & InputProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={id}
      render={({ field, fieldState: { error, invalid } }) => (
        <FormControl isInvalid={invalid}>
          <InputChakra
            ref={field.ref}
            value={field?.value}
            onBlur={field.onBlur}
            onChange={field.onChange}
            fontSize="0.9rem"
            bgColor="weather.grey"
            borderRadius="10px"
            border="1px solid transparent"
            _hover={{}}
            _focusVisible={{ borderColor: "weather.orange" }}
            {...rest}
          />
          <FormErrorMessage>{error?.message}</FormErrorMessage>
        </FormControl>
      )}
    />
  );
};
