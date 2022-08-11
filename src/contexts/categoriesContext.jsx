import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../assets/shop-data";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util";

// creating the actual context with default value
export const CategoriesContext = createContext({
  categoryMap: {},
  setCategoryMap: () => {},
});

export const CategoriesProvider = ({ children }) => {
  useEffect(() => {
    const getDataFromServer = async () => {
      const result = await getCategoriesAndDocuments();
      setCategoryMap(result);
    };
    getDataFromServer();
  }, []);

  const [categoryMap, setCategoryMap] = useState({});
  const value = { categoryMap, setCategoryMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
