import { Restaurant } from "./component"
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantContainer = ({restaurantId}) => {
  // const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
  const {data: restaurant} = useGetRestaurantsQuery(undefined, {
    selectFromResult: result => ({
      ...result,
      data: result.data.find(({id}) => restaurantId === id)
    })
  })

  if (!restaurant) {
    return null
  }
  return <Restaurant restaurant={restaurant} />;
};