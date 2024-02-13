import { useSelector } from "react-redux";
import { Tab } from "../tab/component";

import styles from './styles.module.scss'
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors";

export const RestaurantTabs = ({onSelect}) => {
  const restaurantIds = useSelector(selectRestaurantIds);
  return (
    <div>
      {restaurantIds.map((id) => (
        <Tab id={id} onClick={() => onSelect(id)} className={styles.tab}/>
      ))}
    </div>
  );
};