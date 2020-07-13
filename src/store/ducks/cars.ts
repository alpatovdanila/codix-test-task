import { getCars } from '../../api/cars';
import { Dispatch } from 'redux';
import { Car } from './car';
import { nanoid } from 'nanoid';

export type CarsState = {
  items: ReadonlyArray<Car>;
  fetching: boolean;
};

type SetFetchingAction = {type:'@cars/setFetching', payload:{fetching:boolean}}
export const setFetching = (fetching:boolean) : SetFetchingAction => ({
  type:"@cars/setFetching",
  payload:{fetching}
})

type AddCarAction = { type: '@cars/add'; payload: { car: Omit<Car, 'id'> } };
export const addCar = (car: Omit<Car, 'id'>): AddCarAction => ({
  type: '@cars/add',
  payload: { car },
});

type RemoveCarAction = { type: '@cars/remove'; payload: { car: Car } };
export const removeCar = (car: Car): RemoveCarAction => ({
  type: '@cars/remove',
  payload: { car },
});

type ReceiveCarsAction = {
  type: '@cars/receive';
  payload: { cars: Car[] };
};
export const receiveCars = (cars: Car[]): ReceiveCarsAction => ({
  type: '@cars/receive',
  payload: { cars },
});

type Action = ReceiveCarsAction | RemoveCarAction | AddCarAction | SetFetchingAction

export const fetchCars = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setFetching(true));
    const cars = await getCars();
    dispatch(receiveCars(cars));
    dispatch(setFetching(false));
  }catch (e) {
    dispatch(setFetching(false));
    console.error(e);
  }

};

export const cars = (
  state: CarsState = { items: [], fetching: false },
  action: Action
) => {
  switch (action.type) {
    case '@cars/add': {
      return {
        ...state,
        items: [{ id: nanoid(), ...action.payload.car }, ...state.items],
      };
    }
    case '@cars/remove': {
      return {
        ...state,
        items: state.items.filter((car) => car !== action.payload.car),
      };
    }
    case '@cars/receive': {
      return {
        ...state,
        items: [...action.payload.cars, ...state.items],
      };
    }
    case '@cars/setFetching': {
      return {
        ...state,
        fetching:action.payload.fetching
      };
    }
    default:
      return state;
  }
};
