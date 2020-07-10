import React from "react";
import styles from "./textarea.module.scss";
import cn from "classnames";

type TextareaProps = {
  block?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({
  block = false,
  className,
  ...rest
}: TextareaProps) => (
  <textarea
    className={cn(styles.textarea, { [styles.block]: block }, className)}
    {...rest}
  />
);
