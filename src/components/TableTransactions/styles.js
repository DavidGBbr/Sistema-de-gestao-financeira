import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: calc(100% - 40px);
  margin: 40px auto;
  border-radius: 15px;
  background-color: #111;
  padding: 30px;
  box-sizing: border-box;

  @media (max-width: 400px) {
    padding: 20px 10px;
    width: calc(100% - 20px);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  color: rgba(255, 255, 255, 0.7);
`;

export const Tbody = styled.tbody``;

export const Th = styled.th`
  padding: 16px;
  text-align: left;
  font-size: 18px;

  @media (max-width: 400px) {
    padding: 8px 3px;
  }
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #ddd;
`;

export const NoData = styled.h2`
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  margin: 40px auto;
`;
