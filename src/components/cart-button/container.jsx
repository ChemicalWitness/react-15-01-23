import { useSelector } from "react-redux";
import { selectDishesAmount } from "../../redux/ui/cart";
import { CartButton } from "./component";

export const CartButtonContainer = () => {
  const amount = useSelector(selectDishesAmount)
  return <CartButton amount={amount} />;
};