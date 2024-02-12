import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const company = createSlice({
  name: "company",
  initialState: { value: {} },
  reducers: {
    setCompany: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    },
    clearCompany: (state, action) => {
      state.value = {};
    },
  },
});
export const { setCompany, clearCompany } = company.actions;
export default company.reducer;
