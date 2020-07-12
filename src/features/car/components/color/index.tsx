import React from "react";
import styles from  "./color.module.scss";
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
}: ColorTypes) => (
  <div
    aria-label={`Color described as ${color}`}
    className={cn(styles.Color, { [styles.outlined]: outlined }, className)}
    style={{ backgroundColor: color, ...style }}
    {...rest}
  />
);
