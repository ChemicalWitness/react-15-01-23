import { useSelector } from "react-redux";
import { Dish } from "../dish/component";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Menu = ({menuIds}) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menuIds.map((id) => (
          <li>
            <Dish dishIds={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};