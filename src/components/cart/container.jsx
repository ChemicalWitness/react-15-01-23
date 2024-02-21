import { useSelector } from "react-redux";
import { selectCartDishesIds } from "../../redux/ui/cart";
import { Cart } from "./component";

export const CartContainer = () => {
  const dishIds = useSelector(selectCartDishesIds)
  return <Cart dishIds={dishIds} />;
};