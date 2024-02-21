import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./component";
import { selectRestaurantMenuById } from "../../redux/entities/restaurant/selectors";
import { useEffect, useState } from "react";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunk/get-dishes-by-restaurant-id";
import { selectIsLoading } from "../../redux/ui/request";

export const MenuContainer = ({restaurantId}) => {
  const [requestId, setRequestId] = useState(null)
  const isLoading = useSelector(state => selectIsLoading(state, requestId))
  const dishIds = useSelector((state) => selectRestaurantMenuById(state, restaurantId))

  const dispatch = useDispatch();

  useEffect(() => {
    setRequestId(dispatch(getDishesByRestaurantId(restaurantId)).requestId)
  }, [restaurantId])

  if (!dishIds?.length) {
    return null
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return <Menu dishIds={dishIds} />;
};