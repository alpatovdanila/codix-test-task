import React from "react";
import styles from "./button.module.scss";
import cn from "classnames";

type ButtonProps = {
  block?: boolean;
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  block = false,
  className,
  children,
  icon,
  ...rest
}: ButtonProps) => (
  <button
    className={cn(styles.button, { [styles.block]: block }, className)}
    {...rest}
  >
    {children}
    {icon && <div className={styles.icon}>{icon}</div>}
  </button>
);
