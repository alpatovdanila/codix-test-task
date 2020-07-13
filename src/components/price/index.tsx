import React from "react";
import styles from "./price.module.scss";
// Todo: знак рубля?
export const Price = ({price}:{price:number}) => <span className={styles.Price}>{price.toLocaleString('ru-RU')} руб.</span>;