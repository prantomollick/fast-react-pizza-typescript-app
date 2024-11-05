import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/layout/AppLayout";
import Error from "./ui/Error";

//Enable data fetching  or data loading react router, to declare like that
//Data loader data actions
const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/menu",
                element: <Menu />,
                loader: menuLoader,
                errorElement: <Error />,
            },
            {
                path: "/cart", //cart page
                element: <Cart />,
            },
            {
                path: "/order", //order page
                element: <CreateOrder />,
            },
            {
                path: "/order/:id", //order page
                element: <Order />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
