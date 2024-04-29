import { Box as BoxRadix } from "@radix-ui/themes";

type BoxProps = {
  children?: JSX.Element | JSX.Element[];
};

export const Box = ({ children, ...rest }: BoxProps) => {
  return (
    <BoxRadix
      maxWidth="115px"
      maxHeight="115px"
      m="10"
      style={{
        background: "rgba(250, 250, 250, 0.05)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
      {...rest}
    >
      {children}
    </BoxRadix>
  );
};
