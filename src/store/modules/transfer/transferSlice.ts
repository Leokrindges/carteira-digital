import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { WalletDigital } from "../../../config/interfaces/WalletDgital";

const transferAdapter = createEntityAdapter({
  selectId: (transfer: WalletDigital) => transfer.id,

  // faz a ordenação dos registros, é opcional.
  //   sortComparer: (a, b) => a.description.localeCompare(b.description),
});

const transfersSlice = createSlice({
  name: "transfers",
  initialState: transferAdapter.getInitialState(),
  reducers: {
    //tudo o que pode ser feito

    addTransfer: transferAdapter.addOne,
    resetTransfer: transferAdapter.removeAll,

    // update: transfersAdapter.updateOne,
    // delete: transfersAdapter.removeOne
  },
});

export const { addTransfer, resetTransfer } = transfersSlice.actions;

export const transfersAdapter = transfersSlice.reducer;

export const { selectAll: listTransfers, selectById: getselectById } =
  transferAdapter.getSelectors();
