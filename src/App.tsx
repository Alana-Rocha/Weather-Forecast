import { useEffect } from "react";
import { CoordsErroPage } from "./pages/CoordsErroPage";
import { HomePage } from "./pages/HomePage";
import { useCoordsStore } from "./stores/coords";

export const App = () => {
  const {
    states: { isLoading, erro },
    actions: { setLatLong, setErro },
  } = useCoordsStore();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setLatLong(coords.latitude, coords.longitude),
      (error) => setErro(error)
    );
  }, [setErro, setLatLong]);

  if (isLoading) return "Carregando...";

  return erro ? <CoordsErroPage /> : <HomePage />;
};
