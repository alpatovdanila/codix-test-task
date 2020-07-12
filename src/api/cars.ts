import { request } from "./client";
import type { Car } from "../features/car/model/car";

type Response = Array<{
  id: number | null;
  title: string;
  description: string;
  year: number;
  color: string;
  // todo: issue fix typo on backend"
  status: "pednding" | "pending" | "in_stock" | "out_of_stock";
  price: number;
}>;

/*С бэка приходит pednding вместо pending, решаю на уровне нормализации, todo:issue*/
const normalizeCars = (cars: Response): Car[] => cars.map(car => ({
    ...car,
    id:`${car.id}`,
    status: car.status === 'pednding' ? 'pending' : car.status
}))

export const getCars = () =>
  request({
    method: "GET",
    path:
      "/ba52e3eda64f5c8c5616d89c4558ba9c/raw/8b0e810d08b709907cf9579e3a37a83e7b3ebc27/test-data.json",
  }).then(normalizeCars);
