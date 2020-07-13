import { CarStatus } from "./car";

export const statusLabels = {
  pending: "Ожидается",
  in_stock: "В наличии",
  out_of_stock: "Нет в наличии",
};

export const getStatusLabel = (status: CarStatus): string => {
  return statusLabels[status] || status;
};
