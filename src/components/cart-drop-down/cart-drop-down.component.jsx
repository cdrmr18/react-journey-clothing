import Button from "../button/button.component";
import "./cart-drop-down.styles.scss";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-item"></div>
      <Button>Checkout</Button>
    </div>
  );
};

export default CartDropDown;
