import React, { useState, useRef } from "react";
import styles from "./dropdown.module.scss";
import cn from "classnames";
import { DropdownList, DropDownOption } from "./dropdown-list";
import { TriangleDown } from "../icon";
import { useClickAway } from "react-use";

type DropDownProps = {
  block?: boolean;
  options: DropDownOption[];
  value: string | null;
  placeholder?: string;
  onChange: (option: string) => void;
};

export const DropDown = ({
  value,
  options,
  placeholder,
  block,
  onChange,
}: DropDownProps) => {
  const [focus, setFocus] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const activeItem = options.find((option) => option.value === value) || null;

  const handleItemClick = (option: DropDownOption) => {
    onChange(option.value);
    setFocus(false);
  };

  useClickAway(containerRef, () => setFocus(false));

  return (
    <div
      className={cn(styles.Dropdown, {
        [styles.focus]: focus,
        [styles.block]: block,
      })}
      ref={containerRef}
    >
      <div className={styles.Hitarea} onClick={() => setFocus(!focus)}>
        {!activeItem && <div className={styles.Placeholder}>{placeholder}</div>}
        {!!activeItem && activeItem.label}
        <div className={styles.Indicator}>
          <TriangleDown size={12} />
        </div>
      </div>

      <div className={styles.Drop}>
        <DropdownList items={options} onItemClick={handleItemClick} />
      </div>
    </div>
  );
};
