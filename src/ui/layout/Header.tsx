import { FC } from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../../features/order/SearchOrder";

const Header: FC = () => {
    return (
        <header>
            <Link to="/">Fast React Pizza Co.</Link>
            <SearchOrder />
            <p></p>
        </header>
    );
};

export default Header;
