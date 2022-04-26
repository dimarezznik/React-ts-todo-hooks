import React, { ChangeEvent, FC, useCallback, useState } from "react";
import styled from "styled-components";
import Form from "./Form/Form";
import Todo from "./Todo/Todo";
import { CurrentType, ID } from "../App";

const TodoForm: FC = () => {
  const [items, setItems] = useState<CurrentType[]>([]);
  const [textInp, setTextInp] = useState<string>("");

  const findId = useCallback(
    (id: number) => {
      const findItem = items.find((item) => item.id === id);
      return findItem;
    },
    [items]
  );

  const changeInput = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setTextInp(e.target.value);
  }, []);

  const addTodo = useCallback((): void => {
    if (textInp !== "") {
      const currentItem: CurrentType = {
        id: Date.now(),
        text: textInp,
        markVariableTodo: false,
      };
      setItems([...items, currentItem]);
      setTextInp("");
    }
  }, [items, textInp]);

  const changeTodo = useCallback(
    (e: ChangeEvent<HTMLInputElement>, id: ID) => {
      const findEl = findId(id);

      setItems((prev) => {
        return prev.map((item) =>
          findEl ? { ...item, text: e.target.value } : item
        );
      });
    },
    [findId]
  );

  const deleteTodo = useCallback((id: ID) => {
    setItems((prev) => prev.filter((item: CurrentType) => item.id !== id));
  }, []);

  const markTodo = useCallback(
    (id: ID) => {
      const findEl = findId(id);
      setItems((prev) => {
        return prev.map((item: CurrentType) =>
          findEl ? { ...item, markVariableTodo: !item.markVariableTodo } : item
        );
      });
    },
    [findId]
  );

  const allMarkTodo = useCallback(() => {
    setItems((prev) => {
      return prev.map((item: CurrentType) => {
        return { ...item, markVariableTodo: true };
      });
    });
  }, []);

  const deleteAllMarkTodo = useCallback(() => {
    setItems((prev) => prev.filter((items) => !items.markVariableTodo));
  }, []);

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
