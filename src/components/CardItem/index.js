import React from "react";
import * as C from "./styles";

export const CardItem = (props) => {
  return (
    <C.Container>
      <C.Description>{props.desc}</C.Description>
      <C.Price color={props.color}>{props.price}</C.Price>
    </C.Container>
  );
};
