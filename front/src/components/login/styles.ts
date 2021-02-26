import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => theme.templates.centerContent};
  z-index: 2;

  box-sizing: border-box;
`;
export const LoginCard = styled.div`
  ${({ theme }) => theme.templates.centerContent};
  padding: 20px;
  background: linear-gradient(90deg, #937ff0, #fc84ba);
  margin: 10px;
  border-radius: 5px;
  width: 300px;
  position: relative;
  overflow: hidden;
  box-shadow: 5px 6px 12px 0px #000000;

  & > .input-field {
    margin: 0;
    padding: 0;
  }
`;
export const LoginTitle = styled.h1`
  z-index: 2;
  ${({ theme }) => theme.fonts.font1};
`;

interface Props {
  size: number;
  left: number;
  top: number;
  color: string;
}
export const Circle = styled.div<Props>`
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  position: absolute;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  background: ${(props) => props.color};
  border-radius: 50%;
  z-index: 1;
`;
export const TextLink = styled.a`
  color: #ffffff;
  font-size: 18px;
  z-index: 2;
  font-weight: 500;
`;
