import { useState } from "react";
import styles from './styles.module.scss';
import { ButtonCounter } from "../button-counter/component";

export const Dish = ({dish}) => {



  return (
    <div className={styles.root}>
      <div>
        <p>{dish.name}</p>
        <span>{dish.price}</span>
      </div>
      <ButtonCounter/>
    </div>
  );
};