import React, { FC, FormEvent } from "react";
import styled from "styled-components";

interface FormButtonProps {
  addTodo: (e: FormEvent<HTMLButtonElement>) => void;
  allMarkTodo: (e: FormEvent<HTMLButtonElement>) => void;
  deleteAllMarkTodo: (e: FormEvent<HTMLButtonElement>) => void;
}

const FormButton: FC<FormButtonProps> = React.memo(
  ({ addTodo, allMarkTodo, deleteAllMarkTodo }) => {
    const addList = (e: FormEvent<HTMLButtonElement>) => {
      addTodo(e);
    };

    const allMarkList = (e: FormEvent<HTMLButtonElement>) => {
      allMarkTodo(e);
    };

    const deleteAllMarkList = (e: FormEvent<HTMLButtonElement>) => {
      deleteAllMarkTodo(e);
    };

    return (
      <>
        <Button onClick={addList}>добавить задачу</Button>
        <Button onClick={allMarkList}>отметить все</Button>
        <Button onClick={deleteAllMarkList}>удалить отмеченное</Button>
      </>
    );
  }
);

export default FormButton;

const Button = styled.button`
  font-size: 25px;
  padding: 20px;
  border-radius: 10px;
`;
