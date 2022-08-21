import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
  isVisible: false,
  setIsVisible: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartQuantity: 0,
  removeCartItem: () => {},
});

export const CartProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));
  const removeItemToCart = (cartItem) =>
    setCartItems(removeCartItem(cartItems, cartItem));

  useEffect(() => {
    const newCartQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartQuantity(newCartQuantity);
  }, [cartItems]);

  const value = {
    isVisible,
    setIsVisible,
    cartItems,
    addItemToCart,
    cartQuantity,
    removeItemToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
