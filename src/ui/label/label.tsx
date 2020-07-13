import React from "react";
import styles from './label.module.scss';
import cn from 'classnames';

type LabelProps = React.HTMLAttributes<HTMLDivElement>

export const Label = ({children, className, ...rest}: LabelProps) => {
    return <div className={cn(styles.Label, className)} {...rest}>{children}</div>
};

