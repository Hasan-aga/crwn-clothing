import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../assets/shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util";

// creating the actual context with default value
export const ProductsContext = createContext({
  products: [],
  setProduct: () => [],
});

export const ProductsProvider = ({ children }) => {
  useEffect(() => {
    const getDataFromServer = async () => {
      const result = await getCategoriesAndDocuments();
      console.log(`results`, result);
      return result;
    };
    getDataFromServer();
  }, []);

  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products, setProducts };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
