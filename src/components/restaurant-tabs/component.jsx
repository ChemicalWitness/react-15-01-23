import { RestaurantTabContainer } from "../restaurant-tab/container";

export const RestaurantTabs = ({restaurantIds, onSelect}) => {
  return (
    <div>
      {restaurantIds.map((id) => (
        <RestaurantTabContainer restaurantId={id} onClick={() => onSelect(id)}/>
      ))}
    </div>
  );
};