import React, { createContext, useState, useContext, useEffect } from "react";

const BasketContext = createContext();

// Helper functions for localStorage
const getStoredBasket = () => {
  const storedBasket = localStorage.getItem("travelBasket");
  return storedBasket ? JSON.parse(storedBasket) : [];
};

const setStoredBasket = (basket) => {
  localStorage.setItem("travelBasket", JSON.stringify(basket));
};

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(getStoredBasket());

  // Update localStorage whenever basket changes
  useEffect(() => {
    setStoredBasket(basket);
  }, [basket]);

  const addToBasket = (item) => {
    setBasket((prev) => [...prev, item]);
  };

  const removeFromBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket, clearBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
