import { DishContainer } from "../dish/container";

export const Menu = ({dishIds}) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {dishIds.map((id) => (
          <li>
            <DishContainer dishId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};