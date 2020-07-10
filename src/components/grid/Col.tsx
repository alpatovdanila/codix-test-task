import React from "react";
import cn from "classnames";
import styles from "./grid.module.scss";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type ColSizes = Cols | 'auto';
type Breakpoints = 'xs'|'sm'|'md'|'lg'|'xl';

type PerBreakpointOptions = {
    [key in Breakpoints]?: Cols
}

type ColProps = {
    xs?: ColSizes,
    sm?: ColSizes,
    md?: ColSizes,
    lg?: ColSizes,
    xl?: ColSizes,
    order?: PerBreakpointOptions,
    offset?:PerBreakpointOptions,
} & React.HTMLAttributes<HTMLDivElement>

export const Col = ({xs, sm, md, lg, xl, order, offset, className, children}:ColProps) => {

    const orderCns = cn({
        [styles[`order-${order?.xs}`]] : order?.xs,
        [styles[`order-sm-${order?.sm}`]] : order?.sm,
        [styles[`order-md-${order?.md}`]] : order?.md,
        [styles[`order-lg-${order?.lg}`]] : order?.lg,
        [styles[`order-xl-${order?.xl}`]] : order?.xl,
    });

    const offsetCns = cn({
        [styles[`offset-${offset?.xs}`]] : offset?.xs,
        [styles[`offset-sm-${offset?.sm}`]] : offset?.sm,
        [styles[`offset-md-${offset?.md}`]] : offset?.md,
        [styles[`offset-lg-${offset?.lg}`]] : offset?.lg,
        [styles[`offset-xl-${offset?.xl}`]] : offset?.xl,
    })

    const sizesCns = cn({
        [styles[`col`]] : !(xs || sm || md || lg || xl),
        [styles[`col-${xs}`]] : xs,
        [styles[`col-sm-${sm}`]] : sm,
        [styles[`col-md-${md}`]] : md,
        [styles[`col-lg-${lg}`]] : lg,
        [styles[`col-xl-${xl}`]] : xl,
    });

    const cns = cn(sizesCns, offsetCns, orderCns, className)

    return <div className={cns}>{children}</div>

}