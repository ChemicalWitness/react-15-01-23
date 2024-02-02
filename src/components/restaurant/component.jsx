import classNames from "classnames";
import { Menu } from "../menu/component";
import { Review } from "../review/component";

import styles from './styles.module.scss';

export const Restaurant = ({restaurant}) => {
  return (
    <div className={classNames(styles.card) }>
       <h2>{restaurant.name}</h2>
       <Menu menu={restaurant.menu} />
       <Review review={restaurant.reviews} />
     </div>
  );
};