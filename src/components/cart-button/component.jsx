import { useState } from "react";
import { Button } from "../button/component";
import { createPortal } from "react-dom";
import { CartContainer } from "../cart/container";
import styles from './styles.module.scss'

export const CartButton = ({amount}) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className={styles.root}>
      <Button onClick={() => {setIsVisible(!isVisible)}}>
        {amount}
      </Button>
      {isVisible && createPortal(
      <div className={styles.modal}>
          <CartContainer/>
        </div>,
        document.getElementById('popoverContainer'))}
    </div>
  );
};