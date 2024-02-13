import { useSelector } from "react-redux";
import { Button } from "../button/component"
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Tab = ({id, onClick, className}) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  return (
    <Button onClick={onClick} className={className}>
      {restaurant.name}
    </Button>
  );
};