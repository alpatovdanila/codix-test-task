import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {CarsState, fetchCars, removeCar} from "../../features/car/model/cars";
import { RootState } from "../../store";

import {CarsList} from "../../features/car/components/cars-list";
import {H1} from "../../ui/heading/heading";
import {Footer} from "../../features/app/components/footer";
import {Logo} from "../../ui/logo";

export const Index = () => {
  const dispatch = useDispatch();
  const cars = useSelector<RootState, CarsState>((store) => store.cars);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  return (
<>
    <header>

           <Logo/>

    </header>
    <div className="container">

        <div className="row">
            <div className="col">
                <H1>¡Ay caramba!</H1>
            </div>
        </div>
        <div className="row">
            <div className="col">
                Form
            </div>
        </div>
        <div className="row">
            <div className="col">
                <CarsList cars={cars} onCarDelete={(car)=>dispatch(removeCar(car))}/>
            </div>
        </div>


    </div>
    <Footer/>
</>
  );
};
