import React, { useState, createContext, useContext, useEffect } from "react";
import { getCategories } from "../services/dataService";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategoriesFromService() {
      const response = await getCategories();
      setCategories(response);
    }
    getCategoriesFromService();
  }, []);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
