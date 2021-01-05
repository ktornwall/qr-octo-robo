import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Barcode } from "../types/Barcode";

type BarcodeState = Array<Barcode>;

const initialState: BarcodeState = [];

const barcodesSlice = createSlice({
  name: "barcodes",
  initialState,
  reducers: {
    addBarcode(state, action: PayloadAction<Barcode>) {
      const barcode = action.payload;
      state.push(barcode);
    },
  },
});

export const { addBarcode } = barcodesSlice.actions;

export default barcodesSlice.reducer;
