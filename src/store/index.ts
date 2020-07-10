import { combineReducers, createStore, applyMiddleware } from "redux";

import { cars, CarsState, fetchCars } from "./cars";
import thunk from "redux-thunk";

export type RootState = {
  cars: CarsState;
};

const rootReducer = combineReducers({ cars });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
