import React from "react";
import Info from "./Info";
import { AppContext } from "../App";
import axios from "axios";
import { useCart } from "../hooks/useCart";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer() {
    const { setCartOpened, onRemoveItems } = React.useContext(AppContext);
    const { cartItems = [], setCartItems, total } = useCart();
    
    const [isOrderComplited, setIsOrderComplite] = React.useState(false);
    const [orderId, setOrderId] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    
    
    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post("https://659546a804335332df825ce2.mockapi.io/orders", {
                items: cartItems,

            });
            setOrderId(data.id);
            setIsOrderComplite(true);
            setCartItems([]);

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];
                await axios.delete(`https://6593fef01493b0116069a92a.mockapi.io/cart/${item.id}`);
                await delay(1000);
            }

        } catch (error) {
            alert("Ошибка при создании заказа :(");
        }
        setIsLoading(false);
    };

    return (        
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Корзина <img onClick={() => setCartOpened(false)} className="removeBtn" src="/img/btn-remove.svg" alt="Close" />
                </h2>

                {
                    cartItems.length > 0 ? (
                        <div className="d-flex flex-column flex" >
                            <div className="items">
                                {cartItems.map((obj) => (
                                    <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                        <div
                                            style={{ backgroundImage: `url(${obj.imageUrl})` }}
                                            className="cartItemImg"></div>

                                        <div className="mr-20 flex">
                                            <p className="mb-5">{obj.title}</p>
                                            <b>{obj.price} грн.</b>
                                        </div >
                                        <img onClick={() => onRemoveItems(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                                    </div>
                                ))}
                            </div>

                            <div className="cartTotalBlock">
                                <ul>
                                    <li>
                                        <span>Всего:</span>
                                        <div></div>
                                        <b>{total} грн.</b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="Arrow" /></button>
                            </div>
                        </div>
                    ) : (
                    <Info 
                        title={isOrderComplited ? "Заказ оформлен!" : "Корзина пустая"} 
                        description={isOrderComplited ? `Ваш заказ #${orderId} скоро будет передан курьерской службе` : "Добавьте хотя бы один товар, что бы вы могли оформить заказ"} 
                        image={isOrderComplited ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
                    />
                )}
            </div>
        </div>
    );
}

export default Drawer;