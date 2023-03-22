import { createContext, useState } from "react";

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransitionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const onDelete = (id) => {
    const newArray = transactionsList.filter(
      (transaction) => transaction.id !== id
    );
    setTransitionsList(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };
  return (
    <TransactionsContext.Provider
      value={{ transactionsList, setTransitionsList, onDelete }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
