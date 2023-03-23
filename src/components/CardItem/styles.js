import styled from "styled-components";

export const Container = styled.div`
  background-color: #111;
  width: 30%;
  padding: 20px;
  border-radius: 15px;

  @media (max-width: 768px) {
    width: calc(500px - 40px);
  }

  @media (max-width: 500px) {
    width: calc(100% - 40px);
  }

  @media (max-width: 400px) {
    width: calc(100% - 20px);
  }
`;

export const DescriptionContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 21px;
  font-family: monospace;
`;

export const Icon = styled.span`
  font-size: 24px;
  padding: 12px;
  width: fit-content;
  height: fit-content;
`;

export const Price = styled.span`
  color: ${(props) => props.color};
  font-size: 26px;
`;
