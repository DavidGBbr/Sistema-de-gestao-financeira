import React, { useContext } from "react";
import * as C from "./styles";
import { TransactionsContext } from "../../context/TransactionsContext";
import { TableItem } from "../TableItem";

export const TableTransactions = () => {
  const { transactionsList } = useContext(TransactionsContext);
  console.log(transactionsList);
  return (
    <C.Container>
      <C.Table>
        <C.Thead>
          <C.Tr>
            <C.Th>Descrição</C.Th>
            <C.Th>Valor</C.Th>
            <C.Th>Tipo</C.Th>
          </C.Tr>
        </C.Thead>
        <C.Tbody>
          {transactionsList.length === 0 && (
            <C.NoData>Sem transações...</C.NoData>
          )}
          {transactionsList.length > 0 &&
            transactionsList.map((transaction, index) => (
              <TableItem key={index} data={transaction} />
            ))}
        </C.Tbody>
      </C.Table>
    </C.Container>
  );
};
