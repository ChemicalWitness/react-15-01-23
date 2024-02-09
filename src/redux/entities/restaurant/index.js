import { createSlice } from "@reduxjs/toolkit";


export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    entities: {},
    ids: [],
  }
})