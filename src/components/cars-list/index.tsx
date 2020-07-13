import React from "react";
import styles from "./cars-list.module.scss";
import { useBreakpointUp } from "../../lib/useBreakpoints";
import { CarsState } from "../../store/ducks/cars";
import { CarRow } from "../car-preview/car-row";
import { CarCard } from "../car-preview/car-card";
import { Car } from "../../store/ducks/car";
import {Empty} from "../../ui/empty/label";

type Props = { cars: CarsState; onCarDelete: (car: Car) => void };

export const CarsList = ({ cars, onCarDelete }: Props) => {
  /*
    Шаблон xs и шаблоны xs+ имеют очень сложно адаптируемые особенности - меняется не только порядок и ширина блоков, но и необходимая
    структура их родительских контейнеров. Между вариантами полного переключения по брейкпоинту через ЦСС и переключением на
    уровне react я выбрал последнее. Вариант частичных переключений не рассмастривал ввиду сложности дальнейшей
    поддержки каши из conditional-блоков
    todo: попросить дизайнера переместить колонки в шаблоне, чтобы простая css-only адаптация стала возможна без костылей
     */
  const showAsTable = useBreakpointUp(699);
  const CarPreviewComponent = showAsTable ? CarRow : CarCard;

  if(!cars.length) return <Empty>Здесь ничего нет</Empty>

  return (
    <div className={styles.CarsList}>
      {showAsTable && (
        <div className={styles.Header}>
          <div className={styles.HeaderCell}>Название</div>
          <div className={styles.HeaderCell}>Год</div>
          <div className={styles.HeaderCell}>Цвет</div>
          <div className={styles.HeaderCell}>Статус</div>
          <div className={styles.HeaderCell}>Цена</div>
          <div className={styles.HeaderCell}></div>
        </div>
      )}

      {cars.map((car) => (
        <CarPreviewComponent
          car={car}
          onDelete={() => onCarDelete(car)}
          key={car.id}
        />
      ))}
    </div>
  );
};
