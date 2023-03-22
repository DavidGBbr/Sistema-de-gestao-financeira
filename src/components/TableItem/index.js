import React, { useContext } from "react";
import * as C from "./styles";
import { FaTrash } from "react-icons/fa";

export const TableItem = ({ data, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{data.desc}</C.Td>
      <C.Td>R$ {data.amount}</C.Td>
      {data.isExpense === "entrance" ? (
        <C.Td color="#66bb6a">Entrada</C.Td>
      ) : (
        <C.Td color="#ef5350">Saída</C.Td>
      )}
      <C.Td>
        <FaTrash
          onClick={() => onDelete(data.id)}
          style={{ cursor: "pointer" }}
        />
      </C.Td>
    </C.Tr>
  );
};
