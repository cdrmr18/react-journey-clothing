import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isVisible, setIsVisible, cartQuantity } = useContext(CartContext);

  const toggleCart = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;
