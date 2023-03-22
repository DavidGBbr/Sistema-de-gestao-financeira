import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: calc(100% - 40px);
  margin: 40px auto;
  display: flex;
  gap: 20px;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

  }
`;