import { getCars } from "../../../api/cars";
import { Dispatch } from "redux";
import { Car } from "./car";
import { nanoid } from "nanoid";

export type CarsState = ReadonlyArray<Car>;

type AddCarAction = { type: "@cars/add"; payload: { car: Omit<Car, "id"> } };
export const addCar = (car: Omit<Car, "id">): AddCarAction => ({
  type: "@cars/add",
  payload: { car },
});

type RemoveCarAction = { type: "@cars/remove"; payload: { car: Car } };
export const removeCar = (car: Car): RemoveCarAction => ({
  type: "@cars/remove",
  payload: { car },
});

type ReceiveCarsAction = {
  type: "@cars/receive";
  payload: { cars: Car[] };
};
export const receiveCars = (cars: Car[]): ReceiveCarsAction => ({
  type: "@cars/receive",
  payload: { cars },
});

type Action = ReceiveCarsAction | RemoveCarAction | AddCarAction;

export const fetchCars = () => async (dispatch: Dispatch) => {
  const cars = await getCars();
  dispatch(receiveCars(cars));
};

export const cars = (state: CarsState = [], action: Action) => {
  switch (action.type) {
    case "@cars/add": {
      return [{ id: nanoid(), ...action.payload.car }, ...state];
    }
    case "@cars/remove": {
      return state.filter((car) => car !== action.payload.car);
    }
    case "@cars/receive": {
      return [...action.payload.cars, ...state];
    }
    default:
      return state;
  }
};
