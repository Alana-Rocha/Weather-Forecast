export const mascaraTemperatura = (graus: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "unit",
    unit: "celsius",
  }).format(graus);
};

export const uvConverter = (uvi: number): string => {
  if (uvi <= 2) {
    return "Low";
  } else if (uvi <= 5) {
    return "Moderate";
  } else if (uvi <= 7) {
    return "High";
  } else if (uvi <= 10) {
    return "Very high";
  } else {
    return "Extreme";
  }
};
