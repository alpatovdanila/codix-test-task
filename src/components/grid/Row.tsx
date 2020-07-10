import React from "react";
import cn from "classnames";
import styles from "./grid.module.scss";

export const Row = ({children, className} : React.HTMLAttributes<HTMLDivElement>) => <div className={cn(styles[`row`], className)}>{children}</div>