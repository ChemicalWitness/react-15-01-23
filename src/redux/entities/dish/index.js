import { createSlice } from "@reduxjs/toolkit";


export const dishSlice = createSlice({
  name: 'dish',
  initialState: {
    entities: {},
    ids: [],
  }
})