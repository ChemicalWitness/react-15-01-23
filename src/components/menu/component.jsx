import { Dish } from "../dish/component";

export const Menu = ({dishIds}) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {dishIds.map((id) => (
          <li>
            <Dish dishId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};