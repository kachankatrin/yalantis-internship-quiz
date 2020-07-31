import { mainReducer } from "./reducers/Reducers";
import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

const reducers = combineReducers({
  mainState: mainReducer,
});

const enhanceMiddleWare = window.navigator.userAgent.includes("Chrome")
  ? compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  : compose(applyMiddleware(thunk));

export const store = createStore(reducers, enhanceMiddleWare);
