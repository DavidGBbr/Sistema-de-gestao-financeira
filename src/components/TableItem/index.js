import React from "react";
import * as C from "./styles";
import {
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp

} from "react-icons/fa"

export const TableItem = ({ data }) => {
  return (
    <C.Tr>
      <C.Td>{data.desc}</C.Td>
      <C.Td>R$ {data.amount}</C.Td>
     <C.Td align="center">
      {data.isExpense === "entrance" ? (
        <FaRegArrowAltCircleUp color="green"/>
      ) : (
        <FaRegArrowAltCircleDown color="red"/>
      )}
      </C.Td>
    </C.Tr>
  );
};
