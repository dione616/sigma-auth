import styled from "styled-components";

export const AppWrapper = styled.div`
  ${({ theme }) => theme.templates.centerContent};
  background: linear-gradient(164deg, #242e48, #613061);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;
