import React from "react";
import styles from "./dropdown-list.module.scss";
import cn from "classnames";

export type DropDownOption = {
  label: string;
  value: string;
};

type ListProps = {
  items: DropDownOption[];
  onItemClick: (option: DropDownOption) => void;
};

export const DropdownList = ({ items, onItemClick }: ListProps) => (
  <div className={styles.container}>
    {items.map((item) => (
      <div onClick={() => onItemClick(item)} className={styles.item}>
        {item.label}
      </div>
    ))}
  </div>
);
