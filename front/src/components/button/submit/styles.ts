import styled from "styled-components";
export const SubmitButton = styled.button`
  padding: 5px;
  outline: none;
  width: 100%;
  background: #937ff0;
  outline: none;
  border: 1px solid black;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 10px;
  ${({ theme }) => theme.fonts.font1};
  color: #ffffff;
`;
