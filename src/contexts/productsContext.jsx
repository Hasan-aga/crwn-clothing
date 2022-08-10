import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../assets/shop-data.json";

// creating the actual context with default value
export const ProductsContext = createContext({
  products: [],
  setProduct: () => [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};