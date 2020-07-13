export type CarStatus = 'pending' | 'in_stock' | 'out_of_stock';

export type Car = {
  id: string;
  title: string;
  description: string;
  year: number;
  color: string;
  status: CarStatus;
  price: number;
};
