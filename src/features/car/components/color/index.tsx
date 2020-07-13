import React from "react";
import styles from "./color.module.scss";
import cn from "classnames";

type ColorTypes = {
  color: string;
  outlined?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Color = ({
  color,
  outlined = false,
  className,
  style,
  ...rest
}: ColorTypes) => {
  const outline =
    outlined ||
    color === "white" ||
    color.toUpperCase() === "#FFFFFF" ||
    color.toUpperCase() === "#FFF";

  return (
    <div
      aria-label={`Color described as ${color}`}
      className={cn(styles.Color, { [styles.outlined]: outline }, className)}
      style={{ backgroundColor: color, ...style }}
      {...rest}
    />
  );
};
