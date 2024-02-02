import { Button } from "../button/component";

import styles from './styles.module.scss'

export const Counter = ({value, onChange, min, max}) => {

  return (
    <div className={styles.root}>
      <Button className={styles.counter} onClick={() => onChange(value - 1)} disabled={value === min}>-</Button>
      {value}
      <Button className={styles.counter} onClick={() => onChange(value + 1)} disabled={value === max}>+</Button>
    </div>

  );
};