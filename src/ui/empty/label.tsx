import React from 'react';
import styles from './empty.module.scss';
import cn from 'classnames';

type EmptyProps = React.HTMLAttributes<HTMLDivElement>;

export const Empty = ({ children, className, ...rest }: EmptyProps) => {
  return (
    <div className={cn(styles.Empty, className)} {...rest}>
      {children}
    </div>
  );
};
