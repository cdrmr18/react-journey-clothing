import { createContext, useState } from "react";

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

export const CartContext = createContext({
  isVisible: false,
  setIsVisible: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

  const value = {
    isVisible,
    setIsVisible,
    cartItems,
    addItemToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
