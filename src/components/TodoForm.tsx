import React, { ChangeEvent, FC, FormEvent } from "react";
import styled from "styled-components";
import Form from "./Form/Form";
import Todo from "./Todo/Todo";
import { CurrentType, ID } from "../App";

interface TodoFormProps {
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  addTodo: (e: FormEvent<HTMLButtonElement>) => void;
  changeTodo: (e: ChangeEvent<HTMLInputElement>, id: ID) => void;
  textInp: string;
  items: CurrentType[];
  deleteTodo: (e: React.MouseEvent, id: ID) => void;
  markTodo: (e: React.MouseEvent, id: ID) => void;
  allMarkTodo: (e: FormEvent<HTMLButtonElement>) => void;
  deleteAllMarkTodo: (e: FormEvent<HTMLButtonElement>) => void;
}

const TodoForm: FC<TodoFormProps> = ({
  changeInput,
  textInp,
  addTodo,
  items,
  changeTodo,
  deleteTodo,
  markTodo,
  allMarkTodo,
  deleteAllMarkTodo,
}) => {
  return (
    <Div>
      <Form
        changeInput={changeInput}
        textInp={textInp}
        addTodo={addTodo}
        allMarkTodo={allMarkTodo}
        deleteAllMarkTodo={deleteAllMarkTodo}
      />
      <Todo
        items={items}
        changeTodo={changeTodo}
        deleteTodo={deleteTodo}
        markTodo={markTodo}
      />
    </Div>
  );
};

export default TodoForm;

const Div = styled.div`
  font-size: 50px;
  font-weight: 600;
`;
