import { configureStore } from "@reduxjs/toolkit";
import { balanceReducer } from "./modules/accountbalance/accountBalanceSlice";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
  },
});

export type AccountBalance = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
