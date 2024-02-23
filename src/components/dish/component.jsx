import styles from './styles.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { decrement, increment, selectDishAmountById } from "../../redux/ui/cart";
import { Button } from '../button/component';

export const Dish = ({dish}) => {
  // const dish = useSelector(selectDishById(dishId))
  const amount = useSelector((state) => selectDishAmountById(state, dish.id));

  const dispatch = useDispatch();

  if (!dish) {
    return null
  }

  return (
    <div className={styles.root}>
      <div>
        <p>{dish.name}</p>
        <span>{dish.price}</span>
      </div>
      <div className={styles.counter}>
        <Button className={styles.button} onClick={() =>{dispatch(decrement(dish.id))}} disabled={amount === 0}>-</Button>
        {amount}
        <Button className={styles.button} onClick={() => {dispatch(increment(dish.id))}} disabled={amount === 5}>+</Button>
      </div>
    </div>
  );
};