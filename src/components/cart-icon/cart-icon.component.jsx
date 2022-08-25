import { useContext } from "react";
import { CartContext } from "../context/cart.context";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isVisible, setIsVisible, cartQuantity } = useContext(CartContext);

  const toggleCart = () => {
    setIsVisible(!isVisible);
  };
  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
