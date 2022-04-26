import React, { ChangeEvent, FC, useCallback } from "react";
import styled from "styled-components";

interface InpType {
  type: string;
  placeholder: string;
  value: string;
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Inp: FC<InpType> = ({ type, placeholder, value, changeInput }) => {
  const changeInputMethod = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      changeInput(e);
    },
    [changeInput]
  );

  return (
    <>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => changeInputMethod(e)}
      />
    </>
  );
};
export default Inp;

export const Input = styled.input`
  font-size: 25px;
  padding: 20px;
  border-radius: 10px;
`;
