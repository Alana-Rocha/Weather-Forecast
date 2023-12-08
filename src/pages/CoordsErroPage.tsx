import { useCoordsStore } from "../stores/coords";

export const CoordsErroPage = () => {
  const {
    states: { erro },
  } = useCoordsStore();

  return (
    <div>
      <h1>{erro?.mensagem}</h1>
    </div>
  );
};
