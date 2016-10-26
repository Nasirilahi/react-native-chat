import { applyMiddleware, compose, createStore } from "redux"


import rootReducer from "../reducers"

export const store = createStore(rootReducer);
