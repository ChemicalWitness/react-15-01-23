import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant";
import { reviewSlice } from "./entities/review";
import { dishSlice } from "./entities/dish";
import { userSlice } from "./entities/user";
import { requestSlice } from "./ui/request";
import { cartSlice } from "./ui/cart";


export const store = configureStore({
  reducer: combineSlices(restaurantSlice, reviewSlice, dishSlice, userSlice, requestSlice, cartSlice),
})

console.log(store.getState())