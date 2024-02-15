import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantReviewById } from "../../restaurant/selectors";
import { selectReviewIds } from "../selectors";

export const getReviewsByRestaurantId = createAsyncThunk(
  'review/getReviewsByRestaurantId',
  async (restaurantId) => {
    const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`)

    return await response.json()
  },
  {
    condition: (restaurantId, {getState}) => {
      const restaurantReviewIds = selectRestaurantReviewById(getState(), restaurantId);
      const reviewIds = selectReviewIds(getState())

      return !restaurantReviewIds.every((id) => reviewIds.includes(id))
    }
  }

)