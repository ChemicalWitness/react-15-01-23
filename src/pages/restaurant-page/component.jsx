import {useEffect, useState} from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { Restaurant } from "../../components/restaurant/component";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../../redux/entities/restaurant/thunk/get-restaurants";
import { selectIsLoading } from "../../redux/ui/request";
import { RestaurantContainer } from "../../components/restaurant/container";
import { RestaurantTabsContainer } from "../../components/restaurant-tabs/container";

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const [requestId, setRequestId] = useState(null)
  const isLoading =  useSelector((state) => selectIsLoading(state, requestId))
  const dispatch = useDispatch();

  useEffect(() => {
    setRequestId(dispatch(getRestaurants()).requestId);
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <RestaurantTabsContainer onSelect={setActiveRestaurantId} />
      {activeRestaurantId && <RestaurantContainer restaurantId={activeRestaurantId}/>}
    </div>
  );
};