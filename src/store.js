import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";
import rootSaga from "./sagas/rootSaga";
import createSagaMiddleware  from "@redux-saga/core";

const sagaMiddleWare = createSagaMiddleware()
const middleWare = [sagaMiddleWare]
const store = createStore(reducer,applyMiddleware(...middleWare))
sagaMiddleWare.run(rootSaga)
export default store