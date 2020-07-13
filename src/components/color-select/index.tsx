import React from 'react';
import styles from './color-select.module.scss';
import cn from 'classnames';
import { Color } from '../color';

type ColorSelectProps = {
  colors: string[];
  activeColor?: string | null;
  onChange: (color: string | null) => void;
};

export const ColorSelect = ({
  colors,
  activeColor = null,
  onChange,
}: ColorSelectProps) => {
  return (
    <div className={styles.ColorSelect}>
      {colors.map((color, i) => (
        <div
          key={color}
          onClick={() => onChange(color)}
          className={cn(styles.Item, {
            [styles.selected]: color === activeColor,
          })}
        >
          <Color color={color} />
        </div>
      ))}
    </div>
  );
};
