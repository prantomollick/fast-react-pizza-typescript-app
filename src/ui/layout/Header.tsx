import { FC } from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../../features/order/SearchOrder';
import Username from '../../features/user/UserName';

const Header: FC = () => {
    return (
        <header className="border-b border-stone-500 bg-yellow-500 px-4 py-4 uppercase sm:px-6">
            <Link to="/">Fast React Pizza Co.</Link>
            <SearchOrder />
            <Username />
        </header>
    );
};

export default Header;
