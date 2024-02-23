import { Tab } from "../tab/component";

export const RestaurantTabs = ({restaurants, onSelect}) => {
  return (
    <div>
      {restaurants.map(({id, name}) => (
        <Tab title={name} onClick={() => onSelect(id)}/>
      ))}
    </div>
  );
};