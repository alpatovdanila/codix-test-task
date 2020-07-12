import { combineReducers, createStore, applyMiddleware } from "redux";

import { cars, CarsState } from "../features/car/model/cars";
import thunk from "redux-thunk";

export type RootState = {
  cars: CarsState;
};

const rootReducer = combineReducers({ cars });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
