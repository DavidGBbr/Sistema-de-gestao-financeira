import React from "react";
import * as C from "./styles";

export const TableItem = ({ data }) => {
  return (
    <C.Tr>
      <C.Td>{data.desc}</C.Td>
      <C.Td>R$ {data.amount}</C.Td>
      <C.Td>{data.isExpense === "entrance" ? "Entrada" : "Saída"}</C.Td>
    </C.Tr>
  );
};
