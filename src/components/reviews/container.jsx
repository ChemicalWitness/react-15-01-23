import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component";
import { selectRestaurantReviewById } from "../../redux/entities/restaurant/selectors";
import { useEffect, useState } from "react";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunk/get-reviews-by-restaurant-id";
import { selectIsLoading } from "../../redux/ui/request";

export const ReviewsContainer = ({restaurantId}) => {
  const [requestId, setRequestId] = useState(null)
  const isLoading =  useSelector((state) => selectIsLoading(state, requestId))
  const reviewIds = useSelector(state => selectRestaurantReviewById(state, restaurantId))

  const dispatch = useDispatch();

  useEffect(() => {
    setRequestId(dispatch(getReviewsByRestaurantId(restaurantId)).requestId)
  }, [restaurantId])

  if (!reviewIds?.length) {
    return null
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <Reviews reviewIds={reviewIds} />;
};