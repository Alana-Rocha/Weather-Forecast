import { Divider, Stack, Typography } from "@mui/material";
import temperaturaIcon from "../assets/temperatura.svg";
import { Box } from "../components/Box";
import { Input } from "../components/Input";
import indiceUv from "../assets/indiceUv.svg";
import umidade from "../assets/umidade.svg";
import vento from "../assets/vento.svg";
import localizacaoSvg from "../assets/localizacao.svg";
import buscaSvg from "../assets/busca.svg";

// import { useCoordsStore } from "../stores/coords";

export const HomePage = () => {
  // const {
  //   states: { latitude, longitude },
  // } = useCoordsStore();

  return (
    <Stack
      height="100vh"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Stack
        padding="35px"
        paddingBottom="95px"
        borderRadius="20px"
        gap={5}
        style={{
          background:
            "linear-gradient(180deg, rgba(202, 77, 38, 0.90) 9.51%, rgba(128, 31, 0, 0.90) 99.97%)",
        }}
      >
        <Stack direction="row" justifyContent="space-between" gap={2}>
          <Input />
          <Stack direction="row" gap={1}>
            <img src={buscaSvg} style={{ width: "25px" }} />
            <img src={localizacaoSvg} style={{ width: "25px" }} />
          </Stack>
        </Stack>

        <Stack justifyContent="center" alignItems="center">
          <Typography variant="h6">
            Sexta, 8 Dez 2023 | Horário Local: 09:26 AM
          </Typography>
          <Typography variant="h5" margin="15px 0">
            CARIACICA, ES
          </Typography>
          <Stack>
            {/* <img src="" alt="" /> */}
            <Typography variant="h3">30º C</Typography>
          </Stack>
          <Typography variant="h6">Limpo</Typography>

        </Stack>
        <Divider style={{ background: "#fff", margin: "0 10px" }} />
        <Stack direction="row" spacing={1}>
          <Box>
            <Stack
              justifyContent="center"
              alignItems="center"
              height="100%"
              fontSize="14px"
            >
              <img src={temperaturaIcon} style={{ width: "35px" }} />
              <h3>Temperatura</h3>
              <h4>30%</h4> 
            </Stack>
          </Box>
          <Box>
            <Stack
              justifyContent="center"
              alignItems="center"
              height="100%"
              fontSize="14px"
            >
              <img src={indiceUv} style={{ width: "25px" }} />
              <h3>Ìndice UV</h3>
              <h4>Extremo</h4>
            </Stack>
          </Box>
          <Box>
            <Stack
              justifyContent="center"
              alignItems="center"
              height="100%"
              fontSize="14px"
            >
              <img src={umidade} style={{ width: "35px" }} />
              <h3>Umidade</h3>
              <h4>20%</h4>
            </Stack>
          </Box>
          <Box>
            <Stack
              justifyContent="center"
              alignItems="center"
              height="100%"
              fontSize="14px"
            >
              <img src={vento} style={{ width: "30px" }} />
              <h3>Vento</h3>
              <h4>12%</h4>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};
