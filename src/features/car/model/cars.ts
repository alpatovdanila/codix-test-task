import { getCars } from "../../../api/cars";
import { Dispatch } from "redux";
import {Car} from "./car";


export type CarsState = ReadonlyArray<Car>;

type AddCarAction = { type: "@cars/add"; payload: { car: Car } };

type RemoveCarAction = { type: "@cars/remove"; payload: { car: Car } };

type ReceiveCarsAction = {
  type: "@cars/receive";
  payload: { cars: Car[] };
};

type Action = ReceiveCarsAction | RemoveCarAction | AddCarAction;

export const addCar = (car: Car): AddCarAction => ({
  type: "@cars/add",
  payload: { car },
});

export const receiveCars = (cars: Car[]): ReceiveCarsAction => ({
  type: "@cars/receive",
  payload: { cars },
});

export const removeCar = (car: Car): RemoveCarAction => ({
  type: "@cars/remove",
  payload: { car },
});

export const fetchCars = () => async (dispatch: Dispatch) => {
  const cars = await getCars();
  dispatch(receiveCars(cars));
};

export const cars = (state: CarsState = [], action: Action) => {
  switch (action.type) {
    case "@cars/add": {
      return [...state, action.payload.car];
    }
    case "@cars/remove": {
      return state.filter((car) => car !== action.payload.car);
    }
    case "@cars/receive": {
      return [...state, ...action.payload.cars];
    }
    default:
      return state;
  }
};
