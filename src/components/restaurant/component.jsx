import classNames from "classnames";
import { Reviews } from "../reviews/component";

import styles from './styles.module.scss';
import { MenuContainer } from "../menu/container";
import { ReviewsContainer } from "../reviews/container";

export const Restaurant = ({restaurant}) => {
  return (
    <div className={classNames(styles.card) }>
       <h2>{restaurant.name}</h2>
       <MenuContainer restaurantId={restaurant.id} />
       <ReviewsContainer restaurantId={restaurant.id} />
     </div>
  );
};