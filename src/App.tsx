import { useEffect } from "react";
import { CoordsErroPage } from "./pages/CoordsErroPage";
import { HomePage } from "./pages/HomePage";
import { useCoordsStore } from "./stores/coords";

export const App = () => {
  const [isLoading, erro, setLatLong, setErro] = useCoordsStore((s) => [
    s.states.isLoading,
    s.states.erro,
    s.actions.setLatLong,
    s.actions.setErro,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setLatLong(coords.latitude, coords.longitude),
      (error) => setErro(error)
    );
  }, [setErro, setLatLong]);

  if (isLoading) return "Carregando...";

  return erro ? <CoordsErroPage /> : <HomePage />;
};
