import { Dish } from "../dish/component";

export const Menu = ({menuIds}) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menuIds.map((id) => (
          <li>
            <Dish dishIds={id} />
          </li>
        ))}
      </ul>
    </div>
  );
};