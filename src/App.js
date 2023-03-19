import React from "react";
import { CardItems } from "./components/CardItems";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TableTransactions } from "./components/TableTransactions";
import { TransactionsProvider } from "./context/TransactionsContext";

const App = () => {
  return (
    <>
      <Header />
      <CardItems />
      <Form />
      <TableTransactions />
    </>
  );
};

export default App;
