import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { Box as MUIBox } from "@mui/system";

type BoxProps = {
  children?: JSX.Element | JSX.Element[];
};

export const Box = ({ children, ...rest }: BoxProps & SxProps<Theme>) => {
  return (
    <MUIBox
      sx={{
        width: "115px",
        height: "115px",
        margin: "10px",
        borderRadius: "15px",
        bgcolor: "rgba(250, 250, 250, 0.05)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        ...rest,
      }}
    >
      {children}
    </MUIBox>
  );
};
