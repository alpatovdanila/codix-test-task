import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { cars, CarsState } from "./ducks/cars";
import {transport, TransportState} from "./ducks/transport";

export type RootState = {
  transport:TransportState
  cars: CarsState;
};

const rootReducer = combineReducers({ cars, transport });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
