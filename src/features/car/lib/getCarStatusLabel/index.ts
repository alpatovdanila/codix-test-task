import type {CarStatus} from "../../model/car";

export const getCarStatusLabel = (status: CarStatus ) : string => {
    return {
        pending:'Ожидается',
        in_stock:'В наличии',
        out_of_stock:'Нет в наличии'
    }[status] || status;
}
