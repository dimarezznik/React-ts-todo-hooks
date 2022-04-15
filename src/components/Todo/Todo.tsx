import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import TodoLi from "./TodoLi/TodoLi";
import { CurrentType } from "../../App";

interface TodoType {
  items: CurrentType[];
  changeTodo: (e: ChangeEvent<HTMLInputElement>, id: number) => void;
  deleteTodo: (e: React.MouseEvent, id: number) => void;
  markTodo: (e: React.MouseEvent, id: number) => void;
}

const Todo: FC<TodoType> = ({ items, changeTodo, deleteTodo, markTodo }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <TodoLi
            key={item.id}
            text={item.text}
            changeTodo={changeTodo}
            id={item.id}
            markVariableTodo={item.markVariableTodo}
            deleteTodo={deleteTodo}
            markTodo={markTodo}
          />
        );
      })}
    </ul>
  );
};

export default Todo;
