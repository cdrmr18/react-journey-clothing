import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsVisible = createSelector(
  [selectCartReducer],
  (cart) => cart.isVisible
);

export const selectCartQuantity = createSelector([selectCartItems], (cart) =>
  cart.reduce((total, item) => total + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cart) =>
  cart.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
  )
);
