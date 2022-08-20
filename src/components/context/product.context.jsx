import { createContext, useState } from "react";
import PRODUCTS from "../../shop-data/shop-data.json";

export const ProductContext = createContext({
  currentProduct: [],
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
