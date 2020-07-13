import React, { useEffect, useState } from 'react';
import styles from './input.module.scss';
import cn from 'classnames';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  block?: boolean;
  onChange: (value: string) => void;
};

export const Input = ({
  block = false,
  className,
  onChange,
  ...rest
}: InputProps) => (
  <input
    className={cn(styles.Input, { [styles.block]: block }, className)}
    onChange={(e) => onChange(e.target.value)}
    {...rest}
  />
);

export type FilteredInputProps = Omit<InputProps, 'value'> & {
  inputFilter?: (value: string) => string;
  changeFilter?: (value: string) => string;
  value: string;
};

export const FilteredInput = ({
  inputFilter = (v) => v,
  changeFilter = (v) => v,
  value,
  onChange,
  ...rest
}: FilteredInputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [filteredValue, setFilteredValue] = useState(value);

  const handleBlur = () => {
    setFilteredValue(changeFilter(inputValue));
  };

  useEffect(() => {
    setFilteredValue(inputFilter(inputValue));
  }, [inputFilter, inputValue]);

  useEffect(() => {
    onChange(filteredValue);
  }, [filteredValue]);

  useEffect(() => {
    // Update from props
    setInputValue(value);
  }, [value]);

  return (
    <Input
      {...rest}
      value={filteredValue}
      onChange={setInputValue}
      onBlur={handleBlur}
    />
  );
};
