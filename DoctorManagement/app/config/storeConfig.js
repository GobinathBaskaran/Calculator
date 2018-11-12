import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

const store = (initialState) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk, loggerMiddleware));
}

export default store({});