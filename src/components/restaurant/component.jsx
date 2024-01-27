import { Menu } from "../menu/component";
import { Review } from "../review/component";

import styles from './styles.module.scss';

export const Restaurant = ({name, menu, reviews}) => {
  return (
    <div className={styles.card}>
       <h2>{name}</h2>
       <Menu menu={menu} />
       <Review review={reviews} />
     </div>
  );
};