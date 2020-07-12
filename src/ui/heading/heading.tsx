import React from "react";
import styles from './heading.module.scss';
import cn from 'classnames';
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>

export const H1 = ({children, className, ...rest}: HeadingProps) => {
    return <h1 className={cn(styles.H1, className)} {...rest}>{children}</h1>
};

export const H2 = ({children, className, ...rest}: HeadingProps) => {
    return <h2 className={cn(styles.H2, className)} {...rest}>{children}</h2>
};


