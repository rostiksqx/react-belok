import React from "react";
import { AppContext } from "../App";

export const useCart = () => {
    const { cartItems, setCartItems, } = React.useContext(AppContext);
    const total = cartItems.reduce((sum, obj) => parseInt(obj.price.replace(/\s/g, '')) + sum, 0);
    
    return { cartItems, setCartItems, total };
};