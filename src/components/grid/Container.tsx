import React from "react";
import cn from "classnames";
import styles from "./grid.module.scss";

type ContainerProps = {
    fluid? :boolean,
} & React.HTMLAttributes<HTMLDivElement>
export const Container = ({fluid = false, children, className} : ContainerProps) => {
    const cns = cn({
        [styles['container']]:!fluid,
        [styles['container-fluid']]:fluid,
    }, className)
    return <div className={cns}>{children}</div>
}