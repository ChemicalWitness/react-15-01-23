import { Tab } from "../tab/component";

import styles from './styles.module.scss'

export const RestaurantTabs = ({restaurants, onSelect}) => {
  return (
    <div>
      {restaurants.map(({name, id}) => (
        <Tab title={name} onClick={() => onSelect(id)} className={styles.tab}/>
      ))}
    </div>
  );
};