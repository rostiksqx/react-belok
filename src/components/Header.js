import { Link } from "react-router-dom";
import React from "react";
import { AppContext } from "../App";
import { useCart } from "../hooks/useCart";

function Header() {
    const { total } = useCart();
    const { setCartOpened } = React.useContext(AppContext);

    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="/img/logo.png" alt="Logo"/>
                    <div>
                        <h3 className="text-uppercase">React Belok</h3>
                        <p className="opacity-5">Магазин спортивных добавок</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li onClick={() => setCartOpened(true)} className="mr-30 cu-p">
                    <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
                    <span>{total} грн.</span>
                </li>
                <li className="mr-30 cu-p">
                    <Link to="/favorites">
                        <img width={18} height={18} src="/img/heart.svg" alt="Favorite"/>
                        <span>Закладки</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <img width={18} height={18} src="/img/user.svg" alt="User Profile"/>
                        <span>Профиль</span>
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;