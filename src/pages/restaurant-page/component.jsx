import {useEffect, useState} from "react";
import { RestaurantContainer } from "../../components/restaurant/container";
import { useGetRestaurantsQuery } from "../../redux/services/api";
import { RestaurantTabsContainer } from "../../components/restaurant-tabs/container";

export const RestaurantPage = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const { isLoading } = useGetRestaurantsQuery()

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
      <>
        <RestaurantTabsContainer onSelect={setActiveRestaurantId} />
        {activeRestaurantId && <RestaurantContainer restaurantId={activeRestaurantId}/>}
      </>
      )}

    </div>
  );
};