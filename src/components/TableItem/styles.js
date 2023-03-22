import styled from "styled-components";

export const Tr = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const Td = styled.td`
  padding: 16px;
  color: rgba(255, 255, 255, 0.7);
  color: ${(props) => props.color};
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 12px;
  }
`;
