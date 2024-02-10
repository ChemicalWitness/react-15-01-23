import {useState} from "react";
import { RestaurantTabs } from "../../components/restaurant-tabs/component";
import { Restaurant } from "../../components/restaurant/component";
import { restaurants } from "../../data/mock";

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  // const activeRestaurant = restaurants.find(({id}) => id === activeRestaurantId)

  return (
    <div>
      <RestaurantTabs onSelect={setActiveRestaurantId} />
      {activeRestaurantId && <Restaurant restaurantIds={activeRestaurantId}/>}
    </div>
  );
};