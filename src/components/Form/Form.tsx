import React, { ChangeEvent, FC, FormEvent } from "react";
import styled from "styled-components";
import { CurrentType } from "../../App";

interface FormProps {
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  addTodo: (e: FormEvent<HTMLButtonElement>) => void;
  textInp: string;
  allMarkTodo: (e: FormEvent<HTMLButtonElement>) => void;
  deleteAllMarkTodo: (e: FormEvent<HTMLButtonElement>) => void;
}

const Form: FC<FormProps> = ({
  changeInput,
  textInp,
  addTodo,
  allMarkTodo,
  deleteAllMarkTodo,
}) => {
  return (
    <form>
      <Input
        type="text"
        placeholder="Введите вашу задачу"
        value={textInp}
        onChange={(e) => changeInput(e)}
      />
      <Button onClick={(e) => addTodo(e)}>добавить задачу</Button>
      <Button onClick={(e) => allMarkTodo(e)}>отметить все</Button>
      <Button onClick={(e) => deleteAllMarkTodo(e)}>удалить отмеченное</Button>
    </form>
  );
};

export default Form;

export const Input = styled.input`
  font-size: 25px;
  padding: 20px;
  border-radius: 10px;
`;

const Button = styled.button`
  font-size: 25px;
  padding: 20px;
  border-radius: 10px;
`;
