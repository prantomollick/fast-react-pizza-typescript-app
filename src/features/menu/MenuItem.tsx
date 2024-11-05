import { FC } from "react";
import { formatCurrency } from "../../utils/helpers";

interface IMenuItemProps {
    id: string;
    name: string;
    unitPrice: string;
    ingredients: string;
    soldOut: string;
    imageUrl: string;
}

const MenuItem: FC<{ pizza: IMenuItemProps }> = ({ pizza }) => {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    return (
        <li>
            <img src={imageUrl} alt={name} />
            <div>
                <p>{name}</p>
                <p>{ingredients.join(", ")}</p>
                <div>
                    {!soldOut ? (
                        <p>{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p>Sold out</p>
                    )}
                </div>
            </div>
        </li>
    );
};

export default MenuItem;
