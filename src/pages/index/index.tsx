import React, { useEffect } from "react";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addCar,
  CarsState,
  fetchCars,
  removeCar,
} from "../../features/car/model/cars";
import { RootState } from "../../store";

import { CarsList } from "../../features/car/components/cars-list";
import { H1, H2 } from "../../ui/heading/heading";
import {
  CarCreateForm,
  ValidCarCreateFormState,
} from "../../features/car/components/car-create-form";

import { BasicTemplate } from "../../templates/basic";

export const Index = () => {
  const dispatch = useDispatch();
  const cars = useSelector<RootState, CarsState>((store) => store.cars);

  const handleSubmit = (formState: ValidCarCreateFormState) => {
    dispatch(
      addCar({

        color: formState.color,
        description: "",
        price: formState.price,
        status: formState.status,
        title: formState.title,
        year: formState.year,
      })
    );
  };

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <BasicTemplate>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={styles.Title}>
              <H1>¡Ay caramba!</H1>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <CarCreateForm onSubmit={handleSubmit} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <H2 className="mb-3">Автомобили в наличии</H2>
            <div className={styles.CarsList}>

              <CarsList
                cars={cars}
                onCarDelete={(car) => dispatch(removeCar(car))}
              />
            </div>
          </div>
        </div>
      </div>
    </BasicTemplate>
  );
};
