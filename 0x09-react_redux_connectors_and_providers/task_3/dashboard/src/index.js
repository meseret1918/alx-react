import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import uiReducer from "./reducers/uiReducer";
import thunk from "redux-thunk";
import { Map } from "immutable";
import { composeWithDevTools } from "redux-devtools-extension";

// Define initial state
const initialState = {};

// Set up Redux DevTools
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools;

// Create Redux store
const store = createStore(
  uiReducer,
  Map(initialState),
  composeEnhancers(applyMiddleware(thunk))
);

// Render the application
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

