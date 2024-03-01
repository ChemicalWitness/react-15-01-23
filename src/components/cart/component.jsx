import { CartItem } from "../cart-item/component";
import { CartItemContainer } from "../cart-item/container";

export const Cart = ({dishIds}) => {
  return (
    <div>
      {dishIds?.length ? dishIds.map(dishId => <CartItemContainer dishId={dishId}/>) : 'Empty'}
    </div>
  );
};