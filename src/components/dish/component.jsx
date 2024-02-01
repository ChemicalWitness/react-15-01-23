import { useState } from "react";
import styles from './styles.module.scss';
import { Counter } from "../counter/component";

export const Dish = ({dish}) => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.root}>
      <div>
        <p>{dish.name}</p>
        <span>{dish.price}</span>
      </div>
      <Counter value={count} onChange={setCount} min={0} max={5}/>
    </div>
  );
};