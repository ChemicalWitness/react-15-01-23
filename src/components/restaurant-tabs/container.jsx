import { RestaurantTabs } from "./component"
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantTabsContainer = (props) => {
  const {data: restaurants} = useGetRestaurantsQuery();
  return (
  <RestaurantTabs {...props} restaurants={restaurants} />
  )
};