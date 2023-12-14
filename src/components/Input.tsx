import InputBase from "@mui/material/InputBase";

export const Input = () => {
  return (
    <>
      <InputBase
        placeholder="procure uma cidade"
        sx={{
          width: "100%",
          p: "10px 25px",
          background: "white",
          borderRadius: "15px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        }}
      />
    </>
  );
};
