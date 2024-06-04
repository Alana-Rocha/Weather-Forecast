import { create } from "zustand";

type CoordsStore = {
  states: {
    isLoading: boolean;
    latitude?: number;
    longitude?: number;
    erro?: string;
  };
  actions: {
    setLatLong: (latitude: number, longitude: number) => void;
    setErro: (erro: GeolocationPositionError) => void;
  };
};

export const useCoordsStore = create<CoordsStore>((set) => ({
  states: {
    isLoading: true,
  },
  actions: {
    setLatLong: (latitude, longitude) =>
      set({ states: { isLoading: false, latitude, longitude } }),
    setErro: (locationError) => {
      let erro = "";
      switch (locationError.code) {
        case locationError.PERMISSION_DENIED:
          erro = "É necessario permissão de localização para o site funcionar";
          break;
        case locationError.POSITION_UNAVAILABLE:
          erro = "Não foi possível pegar a localização atual";
          break;
      }

      set({ states: { isLoading: false, erro } });
    },
  },
}));
