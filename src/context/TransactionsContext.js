import { createContext, useState } from "react";

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactionsList, setTransitionsList] = useState([]); //Lista com as transações

  return (
    <TransactionsContext.Provider
      value={{ transactionsList, setTransitionsList }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
