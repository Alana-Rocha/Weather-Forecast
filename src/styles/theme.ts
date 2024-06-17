import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    weather: {
      white: "#FFF",
      black: "#000",
      azul: "#010059",
      orange: "#F58634",
      yellow: "#FCC82F",
      grey: "#F2F3F3",
      dark_grey: "#E7E7EB",
    },
  },
  fonts: {
    heading: "Sinkin",
    body: "Sinkin",
  },
  styles: {
    global: {
      html: { minHeight: "100vh", scrollBehavior: "smooth" },
      body: {
        minHeight: "100vh",
        color: "previsao.branco",
      },
    },
  },
  components: {
    Progress: {
      baseStyle: {
        filledTrack: {
          bg: "linear-gradient(90deg, rgba(245,134,52,0) 0%, rgba(245,134,52,1) 50%, rgba(245,134,52,0) 100%)",
        },
      },
    },
    Checkbox: {
      baseStyle: {
        icon: {
          display: "none",
        },
        control: {
          borderRadius: "6px",
          border: "2px",
          padding: "7px",
        },
      },
    },
  },
});
