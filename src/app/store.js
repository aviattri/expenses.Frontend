import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import expensesReducer from "./expensesReducer";
import thunk from "redux-thunk";
const middleware = [thunk];

export const store = configureStore(
  {
    reducer: {
      expensesReducer: expensesReducer,
    },
  },
  composeWithDevTools(applyMiddleware(...middleware))
);
