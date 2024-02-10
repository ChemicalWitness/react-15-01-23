import classNames from "classnames";
import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

import styles from './styles.module.scss';
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const Restaurant = ({restaurantIds}) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantIds));
  return (
    <div className={classNames(styles.card) }>
       <h2>{restaurant.name}</h2>
       <Menu menuIds={restaurant.menu} />
       <Reviews reviewIds={restaurant.reviews} />
     </div>
  );
};