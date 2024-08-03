import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AccountBalance } from "../../index";
import { BalanceState } from "../../../config/interfaces/accountBalance";
import { carteira } from "../../../config/data/carteira.data";

const initialState: BalanceState = {
  value: carteira.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  ),
};
const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { incrementByAmount, decrementByAmount } = balanceSlice.actions;

export const selectBalance = (accountBalance: AccountBalance) =>
  accountBalance.balance;

export const balanceReducer = balanceSlice.reducer;
