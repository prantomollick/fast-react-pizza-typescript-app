import { useState } from "react";
import { ActionFunction, Form, redirect } from "react-router-dom";
import { createOrder, ICartItem, IOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) => {
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
        str
    );
};

const fakeCart = [
    {
        pizzaId: 12,
        name: "Mediterranean",
        quantity: 2,
        unitPrice: 16,
        totalPrice: 32,
    },
    {
        pizzaId: 6,
        name: "Vegetale",
        quantity: 1,
        unitPrice: 13,
        totalPrice: 13,
    },
    {
        pizzaId: 11,
        name: "Spinach and Mushroom",
        quantity: 1,
        unitPrice: 15,
        totalPrice: 15,
    },
];

const CreateOrder: React.FC = () => {
    // const [withPriority, setWithPriority] = useState(false);
    const cart = fakeCart;

    return (
        <div>
            <h2>Ready to order? Let's go!</h2>

            <Form method="POST">
                <div>
                    <label>First Name</label>
                    <input type="text" name="customer" required />
                </div>

                <div>
                    <label>Phone number</label>
                    <div>
                        <input type="tel" name="phone" required />
                    </div>
                </div>

                <div>
                    <label>Address</label>
                    <div>
                        <input type="text" name="address" required />
                    </div>
                </div>

                <div>
                    <input
                        type="checkbox"
                        name="priority"
                        id="priority"
                        // value={withPriority}
                        // onChange={(e) => setWithPriority(e.target.checked)}
                    />
                    <label htmlFor="priority">
                        Want to yo give your order priority?
                    </label>
                </div>

                <div>
                    <input
                        type="hidden"
                        name="cart"
                        value={JSON.stringify(cart)}
                    />
                    <button>Order now</button>
                </div>
            </Form>
        </div>
    );
};

/* eslint-disable react-refresh/only-export-components */
export const action: ActionFunction = async ({ request }) => {
    const formData: FormData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
        const order: IOrder = {
            customer: data.customer as string,
            phone: data.phone as string,
            address: data.address as string,
            priority: data.priority === "on",
            cart: JSON.parse(data.cart as string) as ICartItem[],
        };
        const newOrder = await createOrder(order);
        return redirect(`/order/${newOrder.id}`);
    } catch (error) {
        console.error("Failed too process the order: ", error);
        throw new Error("Invalid form data.");
    }
};

export default CreateOrder;
