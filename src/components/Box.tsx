import { Box as MUIBox } from "@mui/system";

type BoxProps = {
  children?: JSX.Element | JSX.Element[];
};

export const Box = ({ children }: BoxProps) => {
  return (
    <MUIBox
      sx={{
        width: 100,
        height: 100,
        margin: "10px",
        borderRadius: "15px",
        bgcolor: "white",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        opacity: 0.2,
      }}
    >
      {children}
    </MUIBox>
  );
};
