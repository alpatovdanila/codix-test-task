import React from "react";
import styles from "./dropdown-list.module.scss";


export type DropDownOption = {
  label: string;
  value: string;
};

type ListProps = {
  items: DropDownOption[];
  onItemClick: (option: DropDownOption) => void;
};

export const DropdownList = ({ items, onItemClick }: ListProps) => (
  <div className={styles.DropdownList}>
    {items.map((item) => (
      <div onClick={() => onItemClick(item)} className={styles.Item}>
        {item.label}
      </div>
    ))}
  </div>
);
