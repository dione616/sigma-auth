import React, { ReactNode } from "react";
import { Err } from "./styles";

interface IProps {
  children?: ReactNode;
}

const ValidationError = ({ children }: IProps) => {
  return children ? <Err>{children}</Err> : <Err>Error!!!</Err>;
};

export default ValidationError;
