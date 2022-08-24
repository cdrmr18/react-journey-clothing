import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropDownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-drop-down.styles";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const gotoCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={gotoCheckoutHandler}>Checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
