import { create } from "zustand";

type CoordsErro = {
  code: number;
  mensagem: string;
};

type CoordsStore = {
  states: {
    latitude?: number;
    longitude?: number;
    erro?: CoordsErro;
  };
  actions: {
    setLatLong: (latitude: number, longitude: number) => void;
    setErro: (erro: GeolocationPositionError) => void;
  };
};

export const useCoordsStore = create<CoordsStore>((set) => ({
  states: {},
  actions: {
    setLatLong: (latitude, longitude) =>
      set({ states: { latitude, longitude } }),
    setErro: (locationError) => {
      const erro = {} as CoordsErro;

      switch (locationError.code) {
        case locationError.PERMISSION_DENIED:
          erro.code = locationError.PERMISSION_DENIED;
          erro.mensagem =
            "É necessario permissão de localização para o site funcionar";
          break;
        case locationError.POSITION_UNAVAILABLE:
          erro.code = locationError.PERMISSION_DENIED;
          erro.mensagem = "Não foi possível pegar a localização atual";
          break;
      }

      set({ states: { erro } });
    },
  },
}));
