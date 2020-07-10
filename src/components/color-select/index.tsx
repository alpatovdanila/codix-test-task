import React from "react";
import styles from "./color-select.module.scss";
import cn from "classnames";
import { Color } from "../color";

type ColorSelectProps = {
  colors: string[];
  activeColor: string;
  onChange: (color: string) => void;
};

export const ColorSelect = ({
  colors,
  activeColor,
  onChange,
}: ColorSelectProps) => {
  return (
    <div className={styles.colorSelect}>
      {colors.map((color, i) => (
        <div
          onClick={() => onChange(color)}
          className={cn(styles.item, {
            [styles.itemSelected]: color === activeColor,
          })}
        >
          <Color color={color} />
        </div>
      ))}
    </div>
  );
};
