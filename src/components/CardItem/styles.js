import styled from "styled-components";

export const Container = styled.div`
  background-color: #111;
  width: 30%;
  padding: 20px;
  border-radius: 15px;
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 21px;
  font-family: monospace;
`;

export const Price = styled.span`
  color: ${(props) => props.color};
  font-size: 26px;
`;
