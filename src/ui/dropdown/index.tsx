import React, { useState, useMemo } from "react";
import styles from "./dropdown.module.scss";
import cn from "classnames";
import { DropdownList, DropDownOption } from "./dropdown-list";

type DropDownProps = {
  block?: boolean;
  options: DropDownOption[];
  value: string | null;
  placeholder?: string;
  onChange: (option: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const DropDown = ({
  value,
  options,
  placeholder,
  block,
  onChange,
}: DropDownProps) => {
  const [focus, setFocus] = useState(false);

  const activeItem = useMemo(() => {
    return options.find((option) => option.value === value) || null;
  }, [value]);

  return (
    <div
      className={cn(styles.Dropdown, {
        [styles.focus]: focus,
        [styles.block]: block,
      })}
      onClick={() => setFocus(true)}
    >
      {!activeItem && <div className={styles.Placeholder}>{placeholder}</div>}
      {!!activeItem && activeItem.label}
      <div className={styles.Drop}>
        <DropdownList
          items={options}
          onItemClick={(option) => onChange(option.value)}
        />
      </div>
    </div>
  );
};
