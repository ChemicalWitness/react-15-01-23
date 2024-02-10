import {useState} from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { Restaurant } from "../../components/restaurant/component";

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  return (
    <div>
      <RestaurantTabs onSelect={setActiveRestaurantId} />
      {activeRestaurantId && <Restaurant restaurantIds={activeRestaurantId}/>}
    </div>
  );
};