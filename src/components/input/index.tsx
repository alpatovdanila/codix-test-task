import React from "react";
import styles from './input.module.scss';
import cn from 'classnames';

type InputProps = {
    block?: boolean,
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({block = false, className, ...rest}: InputProps) => <input
    className={cn(styles.input, {[styles.block]: block}, className)} {...rest}/>