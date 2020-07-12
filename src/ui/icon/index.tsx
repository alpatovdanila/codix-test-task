import React from "react";
import styles from "./icon.module.scss";
import { ReactComponent as ChevronRightSvg } from "./chevron-right.svg";

type IconProps = React.SVGAttributes<SVGSVGElement> & {
  size?: number;
  color?: string;
};

type StrokedIconProps = IconProps & { strokeWidth?: number };

export const asStrokedIcon = (
  Component: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
) => ({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  ...rest
}: StrokedIconProps) => (
  <Component
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    className={styles.Icon}
    {...rest}
  />
);


export const ChevronRight = asStrokedIcon(ChevronRightSvg);
