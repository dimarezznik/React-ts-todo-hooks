import { ChangeEvent, FC } from "react";
import TodoLi from "./TodoLi/TodoLi";
import { CurrentType, ID } from "../../App";
import React from "react";

interface TodoType {
  items: CurrentType[];
  changeTodo: (e: ChangeEvent<HTMLInputElement>, id: ID) => void;
  deleteTodo: (id: ID) => void;
  markTodo: (id: ID) => void;
}

const Todo: FC<TodoType> = React.memo(
  ({ items, changeTodo, deleteTodo, markTodo }) => {
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
  }
);

export default Todo;
