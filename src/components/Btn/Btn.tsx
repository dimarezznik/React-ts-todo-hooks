import React, { FC } from "react";
import styled from "styled-components";

interface BtnType {
  onClick: (e: any) => void;
  children: string;
}

const Btn: FC<BtnType> = ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default Btn;

const Button = styled.button`
  font-size: 25px;
  padding: 20px;
  border-radius: 10px;
`;
