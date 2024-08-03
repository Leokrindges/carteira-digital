import { configureStore } from "@reduxjs/toolkit";
import { balanceReducer } from "./modules/accountbalance/accountBalanceSlice";
import { transfersAdapter } from "./modules/transfer/transferSlice";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    transfers: transfersAdapter,
  },
});

export type AccountBalance = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
