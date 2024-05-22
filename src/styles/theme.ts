import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    previsao: {
      branco: "#FFF",
      azul: "#010059",
      laranja: "#F58634",
      verde: "#15a331",
      verdeHover: "#16b835",
      amarelo: "#FCC82F",
      cinza_claro: "#F2F3F3",
      cinza_escuro: "#87868A",
      cinza_imagem: "#E7E7EB",
      vermelho: "#cf0e0e",
      vermelhoHover: "#f01818",
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
        color: "previsao.azul",
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
