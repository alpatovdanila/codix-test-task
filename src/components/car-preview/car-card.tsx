import { Car } from '../../store/ducks/car';
import { Color } from '../color';
import React from 'react';
import cardStyles from './car-card.module.scss';
import previewStyles from './car-preview.module.scss';
import cn from 'classnames';
import { Price } from '../price';
import { getStatusLabel } from '../../store/statusLabels';

type CarCardProps = { car: Car; onDelete: () => void };
export const CarCard = ({ car, onDelete }: CarCardProps) => {
  return (
    <div className={cn(previewStyles.CarPreview, cardStyles.CarCard)}>
      <div className={cn('row', cardStyles.Row)}>
        <div className="col">{car.title}</div>
        <div className="col">
          <div className="row">
            <div className="col-auto">
              <Color color={car.color} />
            </div>
            <div className={cn('col', cardStyles.Price)}>
              <Price price={car.price} />
            </div>
          </div>
        </div>
      </div>
      {car.description.trim() && (
        <div className={cn('row', cardStyles.Row)}>
          <div className="col">
            <div className={previewStyles.Description}>{car.description}</div>
          </div>
        </div>
      )}
      <div className={cn('row', 'align-items-center', cardStyles.Row)}>
        <div className="col">
          <div className="row">
            <div className="col-auto">{car.year}</div>
            <div className={cn('col', cardStyles.Status)}>
              {getStatusLabel(car.status)}
            </div>
          </div>
        </div>
        <div className={cn('col', cardStyles.Actions)}>
          <button className={previewStyles.Button} onClick={onDelete}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};
