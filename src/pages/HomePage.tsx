import { useCoordsStore } from "../stores/coords";

export const HomePage = () => {
  const {
    states: { latitude, longitude },
  } = useCoordsStore();

  return (
    <div>
      <h1>
        Sua localização é: {latitude}, {longitude}
      </h1>
    </div>
  );
};
