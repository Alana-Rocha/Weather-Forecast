import { useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { useCoordsStore } from "./stores/coords";
import { Spinner } from "@chakra-ui/react";

export const App = () => {
  const [isLoading, setLatLong, setErro] = useCoordsStore((s) => [
    s.states.isLoading,
    s.actions.setLatLong,
    s.actions.setErro,
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => setLatLong(coords.latitude, coords.longitude),
      (error) => setErro(error)
    );
  }, [setErro, setLatLong]);

  if (isLoading) return <Spinner size="xl" />;

  return <HomePage />;
};
