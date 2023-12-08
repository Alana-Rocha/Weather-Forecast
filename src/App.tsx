import { useEffect } from "react";
import { CoordsErroPage } from "./pages/CoordsErroPage";
import { HomePage } from "./pages/HomePage";
import { useCoordsStore } from "./stores/coords";

export const App = () => {
  const {
    states: { erro },
    actions: { setLatLong, setErro },
  } = useCoordsStore();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) =>
        setLatLong(position.coords.latitude, position.coords.longitude),
      (error) => setErro(error)
    );
  }, [setErro, setLatLong]);

  if (erro) return <CoordsErroPage />;

  return <HomePage />;
};
