import styles from './styles.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dish/selectors";
import { decrement, increment, selectDishAmountById } from "../../redux/ui/cart";
import { Button } from '../button/component';
import { useCallback } from 'react';
import { CartItemContainer } from '../cart-item/container';

export const Dish = ({dish}) => {
  // const dish = useSelector(selectDishById(dishId))
  const amount = useSelector((state) => selectDishAmountById(state, dish.id));
  const dispatch = useDispatch();
  const dishId = dish.id;
  const setAmount = useCallback((amount) => dispatch(setAmount({dishId: dishId, amount})), [dishId, dispatch])


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