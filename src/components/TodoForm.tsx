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
      return items.find((item) => item.id === id);
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
      setItems((prev: any) => {
        return prev.map((item: any) => {
          if (item.id === id) {
            item.text = e.target.value;
          }
          return item;
        });
      });
    },
    [items]
  );

  const deleteTodo = useCallback((id: ID) => {
    setItems((prev) => prev.filter((item: CurrentType) => item.id !== id));
  }, []);

  const markTodo = useCallback(
    (id: ID) => {
      setItems((prev: any) => {
        return prev.map((item: any) => {
          if (item.id === id) {
            return { ...item, markVariableTodo: !item.markVariableTodo };
          }
          return item;
        });
      });
    },
    [items]
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
