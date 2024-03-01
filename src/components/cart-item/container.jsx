import { useDispatch, useSelector } from "react-redux";
import { selectDishAmountById } from "../../redux/ui/cart";
import { CartItem } from "./component";
import { useCallback } from "react";

export const CartItemContainer = ({dishId}) => {
  const amount = useSelector((state) => selectDishAmountById(state, dishId))

  const dispatch = useDispatch();
  const setAmount = useCallback((amount) => dispatch(setAmount({dishId: dishId, amount})), [dishId, dispatch])


  if (!dishId) {
    return null
  }

  return (
    <CartItem amount={amount} dish={dishId} />
  );
}