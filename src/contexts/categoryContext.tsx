import React, { useState, createContext, useContext, useEffect } from "react";
import { getCategories } from "../services/dataService";
import { CategoryContextType, CategoryType } from "./categoryContextType";

const CategoryContext = createContext<CategoryContextType>( {} as CategoryContextType );

const CategoryProvider = ({ children } : {children: React.ReactNode}) => {
  const [categories, setCategories] = useState<CategoryType[] | []>([]);

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
