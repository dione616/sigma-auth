import styled from "styled-components";
export const NavWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0px;
  width: 100vw;
  background: white;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(90deg, #937ff0, #fc84ba);
  color: white;
  ${({ theme }) => theme.fonts.font1};

  & > a {
    font-size: 22px;
    font-weight: 600;
    margin-right: 20px;
    text-decoration: none;
    color: white;
  }
`;
export const Name = styled.div`
  &:hover > div {
    display: block;
  }
`;
export const LogOutNav = styled.div`
  display: none;
  position: absolute;
  top: 40px;
  padding-top: 20px;
`;
