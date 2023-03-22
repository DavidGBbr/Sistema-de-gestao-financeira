import React from "react";
import * as C from "./styles";

export const CardItem = (props) => {
  return (
    <C.Container>
      <C.DescriptionContent>
        <C.Description>{props.desc}</C.Description>
        <C.Icon>{props.icon}</C.Icon>
      </C.DescriptionContent>
      <C.Price color={props.color}>{props.price}</C.Price>
    </C.Container>
  );
};
