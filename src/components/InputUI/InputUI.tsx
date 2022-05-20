import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import styled from "styled-components";

interface InputType {
  textInp: string;
  setTextInp: Dispatch<SetStateAction<string>>;
}

const InputUI: FC<InputType> = React.memo(({ setTextInp, textInp }) => {
  const changeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setTextInp(e.target.value);
  };
  return (
    <>
      <Input
        type="text"
        placeholder="Введите вашу задачу"
        value={textInp}
        onChange={changeInput}
      />
    </>
  );
});

export default InputUI;

export const Input = styled.input`
  font-size: 25px;
  padding: 20px;
  border-radius: 10px;
`;
