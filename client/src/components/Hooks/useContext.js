import { createContext, useState, useEffect } from "react";
import usePersistedState from "./usePersistedState";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [cart, setCart] = usePersistedState([], "cart");

  useEffect(() => {
    fetch("/api/get-items")
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  console.log("Cart updated!", cart);

  return (
    <DataContext.Provider value={{ data, cart, setCart }}>{children}</DataContext.Provider>
  );
};
