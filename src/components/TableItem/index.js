import React from "react";
import * as C from "./styles";

export const TableItem = ({ data }) => {
  return (
    <C.Tr>
      <C.Td>{data.desc}</C.Td>
      <C.Td>R$ {data.amount}</C.Td>
      {data.isExpense === "entrance" ? (
        <C.Td color="#66bb6a">Entrada</C.Td>
      ) : (
        <C.Td color="#ef5250">Saída</C.Td>
      )}
    </C.Tr>
  );
};
