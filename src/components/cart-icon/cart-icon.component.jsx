import { useSelector, useDispatch } from "react-redux";
import {
  selectIsVisible,
  selectCartQuantity,
} from "../../store/cart/cart.selector";
import { setIsVisible } from "../../store/cart/cart.action";

import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(selectCartQuantity);
  const isVisible = useSelector(selectIsVisible);

  const toggleCart = () => {
    dispatch(setIsVisible(!isVisible));
  };

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
