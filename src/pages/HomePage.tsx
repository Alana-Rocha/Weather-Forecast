import { Box } from "../components/Box";
import { Input } from "../components/Input";
// import { useCoordsStore } from "../stores/coords";

export const HomePage = () => {
  // const {
  //   states: { latitude, longitude },
  // } = useCoordsStore();

  return (
    <div
      style={{
        height: "100vw",
        background: "linear-gradient(180deg, #6C6B67 0%, #0E0D0B 100%)",
      }}
    >
      <Input />
      <Box></Box>
      {/* <h1>
        Sua localização é: {latitude}, {longitude}
      </h1> */}
    </div>
  );
};
