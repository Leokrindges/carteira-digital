import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AccountBalance } from '../../index'
import { BalanceState } from '../../../config/interfaces/accountBalance'

const initialState: BalanceState = {
  value: 0,
}
 const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
        state.value -= action.payload
      },
  },
})

export const { incrementByAmount } = balanceSlice.actions

export const selectBalance = (accountBalance: AccountBalance) => accountBalance.balance

export const balanceReducer = balanceSlice.reducer