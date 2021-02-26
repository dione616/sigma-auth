import styled from "styled-components";

export const Err = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  font-weight: 800;
  font-size: 24px;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: -5px 0;
  }
`;
