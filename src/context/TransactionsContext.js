import { createContext, useState } from "react";

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransitionsList] = useState(
    data ? JSON.parse(data) : []
  ); //Lista com as transações

  return (
    <TransactionsContext.Provider
      value={{ transactionsList, setTransitionsList }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
