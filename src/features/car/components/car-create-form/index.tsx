import React, { useState } from "react";
import { Input } from "../../../../ui/input";
import { ColorSelect } from "../color-select";
import { DropDown } from "../../../../ui/dropdown";
import { statusLabels } from "../../model/statusLabels";
import { Button } from "../../../../ui/button";
import { ChevronRight } from "../../../../ui/icon";
import { NumberInput } from "../../../../ui/number-input";
import { Car } from "../../model/car";

export type ValidCarCreateFormState = Omit<Car, "id">;

type CarCreateFormState = {
  color: string | null;
  title: string;
  price: number | null;
  year: number | null;
  status: string;
  description: string;
};

const initialFormState: CarCreateFormState = {
  color: null,
  title: "",
  price: null,
  year: null,
  status: "",
  description:""
};

type Props = {
  onSubmit: (formData: ValidCarCreateFormState) => void;
};

const statusOptions = Object.entries(statusLabels).map(([value, label]) => ({
  value,
  label,
}));

const isFormStateValid = (state: CarCreateFormState) => {
  return (
    state.color && state.price && state.status && state.title && state.year
  );
};

export const CarCreateForm = ({ onSubmit }: Props) => {
  const [formState, setFormDataState] = useState(initialFormState);

  const isValid = isFormStateValid(formState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      onSubmit(formState as ValidCarCreateFormState);
      setFormDataState(initialFormState);
    }
  };

  const setFormData = (data: Partial<CarCreateFormState>) =>
    setFormDataState({ ...formState, ...data });

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-12 col-md-4 mb-4">
          <Input
            block
            placeholder="Название"
            value={formState.title}
            onChange={(title) => setFormData({ title })}
          />
        </div>
        <div className="col-6 col-md-4">
          <NumberInput
              placeholder="Цена в рублях"
              value={formState.price}
              min={0}
              max={1000000000}
              maxLength={10}
              block
              onChange={(price) => setFormData({ price })}
          />
        </div>
        <div className="col-6 col-md-4 mb-4">
          <NumberInput
              placeholder="Год выпуска"
              block
              min={1900}
              maxLength={4}
              max={+new Date().getFullYear()}
              value={formState.year}
              onChange={(year) => setFormData({ year })}
          />
        </div>
        <div className="col-12 mb-3">
          <Input
              placeholder="Описание"
              block
              value={formState.description}
              onChange={(description) => setFormData({ description })}
          />
        </div>
        <div className="col-12 col-md-4 mb-4">
          <ColorSelect
              colors={["#ffffff", "#000000", "#cbcbcc", "#d74345", "#88c504"]}
              activeColor={formState.color}
              onChange={(color) => setFormData({ color: color })}
          />
        </div>
        <div className="col-6 col-md-4">
          <DropDown
              placeholder="Статус наличия"
              options={statusOptions}
              value={formState.status}
              onChange={(status) => setFormData({ status })}
          />
        </div>
        <div className="col-6 col-md-4">
          <Button
              type="submit"
              icon={<ChevronRight size={8} strokeWidth={6} />}
              block
              disabled={!isValid}
          >
            Отправить
          </Button>
        </div>
      </div>

    </form>
  );
};
