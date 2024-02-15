import { CartItem } from "../cart-item/component";

export const Cart = ({dishIds}) => {
  return (
    <div>
      {dishIds?.length ? dishIds.map(dishId => <CartItem dishId={dishId}/>) : 'Empty'}
    </div>
  );
};