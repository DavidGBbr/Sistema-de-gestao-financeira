import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import { CardItem } from "../CardItem";
import * as C from "./styles";

export const CardItems = () => {
  const { transactionsList } = useContext(TransactionsContext);
  const totalEntries = transactionsList
    .filter((transaction) => transaction.isExpense === "entrance")
    .map((transaction) => Number(transaction.amount))
    .reduce((a, b) => a + b, 0);
  const totalOutings = transactionsList
    .filter((transaction) => transaction.isExpense === "expense")
    .map((transaction) => Number(transaction.amount))
    .reduce((a, b) => a + b, 0);
  return (
    <C.Container>
      <CardItem
        color="#66bb6a"
        price={totalEntries.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
        desc="Entradas"
      />
      <CardItem
        color="#ef5350"
        price={totalOutings.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
        desc="Saídas"
      />
      <CardItem
        color="#42a5f5"
        price={(totalEntries - totalOutings).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
        desc="Saldo"
      />
    </C.Container>
  );
};
