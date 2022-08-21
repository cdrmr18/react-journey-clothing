import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  return (
    <div>
      {cartItems.map((cartItem) => {
        const { id, name, quantity, price } = cartItem;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <span>{quantity} X </span>
            <span>${price}</span>
            <p
              onClick={() => {
                removeItemToCart(cartItem);
              }}
            >
              decrement
            </p>
            <p
              onClick={() => {
                addItemToCart(cartItem);
              }}
            >
              increment
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
