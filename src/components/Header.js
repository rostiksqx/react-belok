function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" alt="Logo"/>
                <div>
                    <h3 className="text-uppercase">React Belok</h3>
                    <p className="opacity-5">Магазин спортивных добавок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li onClick={props.onClickCart} className="mr-30 cu-p">
                    <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
                    <span>1200 грн.</span>
                </li>
                <li className="mr-30">
                    <img width={18} height={18} src="/img/heart.svg" alt="Favorite"/>
                    <span>Закладки</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" alt="User Profile"/>
                    <span>Профиль</span>
                </li>
            </ul>
        </header>
    );
}

export default Header;