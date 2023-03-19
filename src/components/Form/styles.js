import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  width: calc(100% - 40px);
  margin: 40px auto;
  border-radius: 15px;
  background-color: #111;
  padding: 30px 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LabelInput = styled.label`
  color: rgba(255, 255, 255, 0.7);
  font-family: monospace;
  font-size: 18px;
`;

export const Input = styled.input`
  padding: 5px;
  border-radius: 15px;
  border: none;
  font-family: monospace;
  font-size: 21px;
`;

export const RadioContent = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-top: 0;
  }
`;

export const LabelRadio = styled.label`
  color: rgba(255, 255, 255, 1.2);
  margin-right: 15px;
  font-family: monospace;
  font-size: 21px;
  cursor: pointer;
`;

export const InputRadio = styled.input`
  accent-color: #0f0f0f;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 10px 20px;
  text-transform: uppercase;
  font-family: monospace;
  border: none;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;

  :hover {
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
