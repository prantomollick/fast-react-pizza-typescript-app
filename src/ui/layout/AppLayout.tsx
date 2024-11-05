import { FC } from "react";
import Header from "./Header";
import CartOverview from "../../features/cart/CartOverview";
import { Outlet } from "react-router-dom";

const AppLayout: FC = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <CartOverview />
        </>
    );
};

export default AppLayout;
