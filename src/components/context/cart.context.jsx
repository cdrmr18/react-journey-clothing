import { createContext, useReducer } from "react";
import { createAction } from "../../components/utils/reducer/reducer.utils";

export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export const clearCartItem = (cartItems, itemToClear) => {
  const newCartItems = cartItems.filter((item) => item.id !== itemToClear.id);
  return newCartItems;
};

export const CartContext = createContext({
  isVisible: false,
  setIsVisible: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartQuantity: 0,
  removeCartItem: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

export const CART_ACTION_TYPES = {
  SET_IS_VISIBLE: "SET_IS_VISIBLE",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const INITIAL_STATE = {
  isVisible: false,
  cartItems: [],
  cartQuantity: 0,
  cartTotal: 0,
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_IS_VISIBLE:
      return {
        ...state,
        isVisible: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled error type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isVisible, cartItems, cartQuantity, cartTotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const addItemToCart = (product) => {
    const newCartItems = addCartItem(cartItems, product);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemToCart = (cartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItem);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItem);
    updateCartItemsReducer(newCartItems);
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newCartQuantity = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );

    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartTotal: newCartTotal,
        cartQuantity: newCartQuantity,
      })
    );
  };

  const setIsVisible = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_VISIBLE, bool));
  };

  const value = {
    isVisible,
    setIsVisible,
    cartItems,
    addItemToCart,
    cartQuantity,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
