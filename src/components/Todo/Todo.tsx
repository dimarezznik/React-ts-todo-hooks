import React, { ChangeEvent, FC, useCallback } from "react";
import TodoItem from "./TodoItem/TodoItem";
import { CurrentType, ID } from "../../App";

interface TodoType {
  items: CurrentType[];
  setItems: React.Dispatch<React.SetStateAction<CurrentType[]>>;
  deleteTodo: (e: React.MouseEvent, id: ID) => void;
  markTodo: (e: React.MouseEvent, id: ID) => void;
}

const Todo: FC<TodoType> = React.memo(
  ({ items, deleteTodo, markTodo, setItems }) => {
    const changeTodo = useCallback(
      (e: ChangeEvent<HTMLInputElement>, id: ID) => {
        setItems(
          items.map((item: CurrentType) => {
            if (id === item.id) {
              return { ...item, text: e.target.value };
            }
            return item;
          })
        );
      },
      [items, setItems]
    );
    return (
      <ul>
        {items.map((item) => {
          return (
            <TodoItem
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
