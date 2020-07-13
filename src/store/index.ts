import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { cars, CarsState } from './ducks/cars';


export type RootState = {

  cars: CarsState;
};

const rootReducer = combineReducers({ cars });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
