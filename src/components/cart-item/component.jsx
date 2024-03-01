import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { selectDishAmountById } from "../../redux/ui/cart";
import styles from './styles.module.scss'

export const CartItem = ({amount, dish}) => {
  return (
    <div className={styles.root}>
      <p>{dish.name}</p>
      <p>{amount}</p>
    </div>
  );
};