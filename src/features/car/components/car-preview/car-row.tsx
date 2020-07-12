import {Car} from "../../model/car";
import {Color} from "../color";
import React from "react";
import rowStyles from './car-row.module.scss';
import previewStyles from './car-preview.module.scss';
import cn from 'classnames';
import {Price} from "../price";
import {getCarStatusLabel} from "../../lib/getCarStatusLabel";

type CarCardProps = { car: Car, onDelete: () => void }
export const CarRow = ({car, onDelete}: CarCardProps) => {
    return (
        <div className={cn(previewStyles.CarPreview, rowStyles.CarRow)}>
            <div className={rowStyles.Cell}>
                {car.title}
                {!!car.description.trim() && <div className={previewStyles.Description}>{car.description}</div>}
            </div>
            <div className={rowStyles.Cell}><Color color={car.color}/></div>
            <div className={cn(rowStyles.Cell, rowStyles.Price)}><Price price={car.price}/></div>
            <div className={rowStyles.Cell}>{car.year}</div>
            <div className={rowStyles.Cell}>{getCarStatusLabel(car.status)}</div>
            <div className={rowStyles.Cell}><button className={previewStyles.HoverButton} onClick={onDelete}>Удалить</button></div>
        </div>
    )
}