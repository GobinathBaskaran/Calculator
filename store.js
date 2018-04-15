import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from 'redux-logger'

import calculatorReducer from "./src/reducers/calculatorReducer";

// reducer configuration
const reducers = combineReducers({ calculator: calculatorReducer });

// middleware configurations
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

// configures and creates the store
const store = (initialState) => {
    return createStore(reducers, initialState, applyMiddleware(loggerMiddleware));
}

export default store({});