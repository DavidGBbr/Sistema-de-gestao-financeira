import React, { useState, useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import * as C from "./styles";

export const Form = () => {
  const { transactionsList, setTransitionsList } =
    useContext(TransactionsContext);

  const [desc, setDesc] = useState(""); //Descrição
  const [amount, setAmount] = useState(""); //Quantia
  const [isExpense, setExpense] = useState(""); //tipo de transação

  const handleAddTransition = () => {
    if (!desc || !amount) {
      alert("Preencha todos os campos");
      return;
    }

    const transactionItem = {
      desc: desc,
      amount: amount,
      isExpense: isExpense,
    };

    const newTransactionList = [...transactionsList, transactionItem];
    setTransitionsList(newTransactionList);
    setDesc("");
    setAmount("");
    localStorage.setItem("transactions", JSON.stringify(newTransactionList));
  };
  return (
    <C.Container>
      <C.InputContent>
        <C.LabelInput>Descrição</C.LabelInput>
        <C.Input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </C.InputContent>
      <C.InputContent>
        <C.LabelInput>Valor</C.LabelInput>
        <C.Input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
        />
      </C.InputContent>

      <C.RadioContent>
        <C.InputRadio
          name="type-transition"
          type="radio"
          id="entrance"
          onChange={() => setExpense("entrance")}
        />
        <C.LabelRadio htmlFor="entrance">Entrada</C.LabelRadio>

        <C.InputRadio
          name="type-transition"
          type="radio"
          id="expense"
          onChange={() => setExpense("expense")}
        />
        <C.LabelRadio htmlFor="expense">Saída</C.LabelRadio>
      </C.RadioContent>

      <C.Button onClick={handleAddTransition}>Adicionar</C.Button>
    </C.Container>
  );
};
