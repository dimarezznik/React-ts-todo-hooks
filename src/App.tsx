import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import styled from "styled-components";
import TodoForm from "./components/TodoForm";

export type ID = number;
export type CurrentType = {
  id: ID;
  text: string;
  markVariableTodo: boolean;
};

function App() {
  const [items, setItems] = useState<CurrentType[]>([]);
  const [textInp, setTextInp] = useState<string>("");

  const changeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setTextInp(e.target.value);
    },
    [textInp]
  );

  const addTodo = useCallback(
    (e: FormEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      if (textInp !== "") {
        const currentItem: CurrentType = {
          id: Date.now(),
          text: textInp,
          markVariableTodo: false,
        };
        setItems([...items, currentItem]);
        setTextInp("");
      }
    },
    [items, textInp]
  );

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
    [items]
  );

  const deleteTodo = useCallback(
    (e: React.MouseEvent, id: ID) => {
      setItems(items.filter((item: CurrentType) => item.id !== id));
    },
    [items]
  );

  const markTodo = useCallback(
    (e: React.MouseEvent, id: ID) => {
      setItems(
        items.map((item: CurrentType) => {
          if (id === item.id) {
            return { ...item, markVariableTodo: !item.markVariableTodo };
          }
          return item;
        })
      );
    },
    [items]
  );

  const allMarkTodo = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setItems(
        items.map((item: CurrentType) => {
          return { ...item, markVariableTodo: true };
        })
      );
    },
    [items]
  );

  const deleteAllMarkTodo = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setItems(items.filter((items) => !items.markVariableTodo));
    },
    [items]
  );

  return (
    <Wrapper>
      <TodoForm
        changeInput={changeInput}
        textInp={textInp}
        addTodo={addTodo}
        items={items}
        changeTodo={changeTodo}
        deleteTodo={deleteTodo}
        markTodo={markTodo}
        allMarkTodo={allMarkTodo}
        deleteAllMarkTodo={deleteAllMarkTodo}
      />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  background: darkorchid;
  display: flex;
  justify-content: center;
  align-items: center;
`;
