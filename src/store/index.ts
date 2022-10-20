import { legacy_createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import rootSaga from "./saga";
import rootReducer from "./reducer"

export const makeStore = (initialState = {}) => {
   // 1: Create the middleware
   const sagaMiddleware = createSagaMiddleware();

   // 2: Add an extra parameter for applying middleware
   const store = legacy_createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));

   // 3: Run your sagas on server
   (store as any).sagaTask = sagaMiddleware.run(rootSaga);

   // 4: now return the store
   return store;
};

export const wrapper = createWrapper(makeStore);

