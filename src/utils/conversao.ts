export const mascaraTemperatura = (graus: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "unit",
    unit: "celsius",
  }).format(graus);
};
