import classNames from "classnames";
import { Menu } from "../menu/component";
import { Review } from "../review/component";

import styles from './styles.module.scss';

export const Restaurant = ({id,name, menu, reviews, className, activeTab}) => {
  return (
    <div className={classNames(styles.card, activeTab === id ? className.tabActive : className.tabUnActive) }>
       <h2>{name}</h2>
       <Menu menu={menu} />
       <Review review={reviews} />
     </div>
  );
};