import { Flex, Text } from "@radix-ui/themes";
import buscaSvg from "../assets/busca.svg";
import indiceUv from "../assets/indiceUv.svg";
import localizacaoSvg from "../assets/localizacao.svg";
import temperaturaIcon from "../assets/temperatura.svg";
import umidade from "../assets/umidade.svg";
import { Box } from "../components/Box";
import { Input } from "../components/Input";

// import { useCoordsStore } from "../stores/coords";

export const HomePage = () => {
  // const {
  //   states: { latitude, longitude },
  // } = useCoordsStore();

  return (
    <Flex height="100vh" justify="center" align="center">
      <Flex
        p="35px"
        pb="95px"
        gap={"3"}
        style={{
          background:
            "linear-gradient(180deg, rgba(202, 77, 38, 0.90) 9.51%, rgba(128, 31, 0, 0.90) 99.97%)",
        }}
      >
        <Flex direction="row" justify="between" gap={"2"}>
          <Input />
          <Flex direction="row" gap={"1"}>
            <img src={buscaSvg} style={{ width: "25px" }} />
            <img src={localizacaoSvg} style={{ width: "25px" }} />
          </Flex>
        </Flex>

        <Flex justify="center" align="center">
          <Text as="p">Sexta, 8 Dez 2023 | Horário Local: 09:26 AM</Text>
          <Text>CARIACICA, ES</Text>
          <Flex>
            {/* <img src="" alt="" /> */}
            <Text as="p">30º C</Text>
          </Flex>
          <Text as="p">Limpo</Text>
        </Flex>
        {/* <Line style={{ background: "#fff", margin: "0 10px" }} /> */}
        <Flex direction="row" gap={"1"}>
          <Box>
            <Flex justify="center" align="center" height="100%">
              <img src={temperaturaIcon} style={{ width: "35px" }} />
              <h3>Temperatura</h3>
              <h4>30%</h4>
            </Flex>
          </Box>
          <Box>
            <Flex justify="center" align="center" height="100%">
              <img src={indiceUv} style={{ width: "25px" }} />
              <h3>Ìndice UV</h3>
              <h4>Extremo</h4>
            </Flex>
          </Box>
          <Box>
            <Flex justify="center" align="center" height="100%">
              <img src={umidade} style={{ width: "35px" }} />
              <h3>Umidade</h3>
              <h4>20%</h4>
            </Flex>
          </Box>
          <Box>
            <Flex justify="center" align="center" height="100%">
              {/* <img src={vento} style={{ width: "30px" }} /> */}
              <h3>Vento</h3>
              <h4>12%</h4>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};
