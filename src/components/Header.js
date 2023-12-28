function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="/img/logo.png" />
                <div>
                    <h3 className="text-uppercase">React Belok</h3>
                    <p className="opacity-5">Магазин спортивных добавок</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img width={18} height={18} src="/img/cart.svg" />
                    <span>1200 грн.</span>
                </li>
                <li className="mr-30">
                    <img width={18} height={18} src="/img/heart.svg" />
                    <span>Закладки</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" />
                    <span>Профиль</span>
                </li>
            </ul>
        </header>
    );
}

export default Header;