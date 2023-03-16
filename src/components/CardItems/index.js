import React from "react";
import { CardItem } from "../CardItem";
import * as C from "./styles";

export const CardItems = () => {
  return (
    <C.Container>
      <CardItem color="#66bb6a" price="R$ 100.00" desc="Entradas" />
      <CardItem color="#ef5350" price="R$ 50.00" desc="Saídas" />
      <CardItem color="#42a5f5" price="R$ 50.00" desc="Saldo" />
    </C.Container>
  );
};
