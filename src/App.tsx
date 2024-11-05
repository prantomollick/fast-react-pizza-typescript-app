import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./features/menu/Menu";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";

//Enable data fetching  or data loading react router, to declare like that
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/menu",
        element: <Menu />,
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
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
