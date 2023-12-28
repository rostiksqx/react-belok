function Drawer() {
    return (        
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">Корзина
                    <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div
                            style={{ backgroundImage: 'url(/img/commodity/2.png)' }}
                            className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5">ZeroPro Protein</p>
                            <b>3 099 грн.</b>
                        </div >
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>

                    <div className="cartItem d-flex align-center">
                        <div
                            style={{ backgroundImage: 'url(/img/commodity/2.png)' }}
                            className="cartItemImg"></div>

                        <div className="mr-20 flex">
                            <p className="mb-5">ZeroPro Protein</p>
                            <b>3 099 грн.</b>
                        </div >
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul>
                        <li>
                            <span>Всего:</span>
                            <div></div>
                            <b>6 200 грн.</b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;