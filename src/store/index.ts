import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cars, CarsState } from "../features/car/model/cars";
import {transport, TransportState} from "../app/model/transport";

export type RootState = {
  transport:TransportState
  cars: CarsState;
};

const rootReducer = combineReducers({ cars, transport });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
