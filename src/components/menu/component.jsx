export const Menu = ({menu}) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({name}) => (
          <li>{name}</li>
        ))}
      </ul>
    </>
  );
};