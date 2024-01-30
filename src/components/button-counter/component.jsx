import { useState } from "react";
import { Button } from "../button/component";

import styles from './styles.module.scss'

export const ButtonCounter = () => {
  const [count, setCount] = useState(0);
  const [isDisabledMin, setIsDisabledMin] = useState(true)
  const [isDisabledMax, setIsDisabledMax] = useState(false)

  return (
    <div className={styles.root}>
      <Button className={styles.counter} onClick={() => {
        if (count <= 0) {
          setIsDisabledMin(true)
        } else {
          setIsDisabledMax(false)
          setCount(count - 1)
        }
      }} disabled={isDisabledMin}>-</Button>
      {count}
      <Button className={styles.counter} onClick={() => {
        if (count >= 5) {
          setIsDisabledMax(true)
        } else {
          setIsDisabledMin(false)
          setCount(count + 1)
        }
      }} disabled={isDisabledMax}>+</Button>
    </div>

  );
};