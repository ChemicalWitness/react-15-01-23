import {useEffect, useState} from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { Restaurant } from "../../components/restaurant/component";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../../redux/entities/restaurant/thunk/get-restaurants";

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [activeRestaurantId])

  return (
    <div>
      <RestaurantTabs onSelect={setActiveRestaurantId} />
      {activeRestaurantId && <Restaurant restaurantIds={activeRestaurantId}/>}
    </div>
  );
};