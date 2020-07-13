import React from "react";
import { InputProps, FilteredInput } from "../input";

type NumberInputProps = Omit<InputProps, "value" | "onChange" | "maxLength"> & {
  value: number | null;
  onChange: (value: number | null) => void;
  max?: number;
  min?: number;
  maxLength?: number;
};

export const NumberInput = ({
  min,
  max,
  value,
  onChange,
  maxLength,
  ...rest
}: NumberInputProps) => {
  const asNumber = (value: string): number =>
    parseInt(value.replace(/\D/g, ""), 10);

  const filter = (value: string) => {
    const number = asNumber(value);
    if (isNaN(number)) return "";
    if (maxLength) return `${number}`.slice(0, maxLength);
    return `${number}`;
  };

  const boundariesFilter = (value: string) => {
    const number = asNumber(value);
    if (isNaN(number)) return "";
    if (min && number < min) return `${min}`;
    if (max && number > max) return `${max}`;
    return `${number}`;
  };

  const handleChange = (value: string) =>
    onChange(isNaN(asNumber(value)) ? null : asNumber(value));

  return (
    <FilteredInput
      {...rest}
      value={`${value}`}
      onChange={handleChange}
      inputFilter={filter}
      changeFilter={boundariesFilter}
    />
  );
};
