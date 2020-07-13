import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

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
    className={cn(styles.Button, { [styles.block]: block }, className)}
    {...rest}
  >
    {children}
    {icon && <div className={styles.Icon}>{icon}</div>}
  </button>
);
