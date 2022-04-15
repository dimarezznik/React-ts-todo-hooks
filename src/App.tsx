import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import styled from "styled-components";
import TodoForm from "./components/TodoForm";

export type CurrentType = {
  id: number;
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
    (e: ChangeEvent<HTMLInputElement>, id: number) => {
      const newArr: CurrentType[] = items.map((item) => {
        if (id === item.id) {
          item.text = e.target.value;
        }
        return item;
      });
      setItems(newArr);
    },
    [items]
  );

  const deleteTodo = useCallback(
    (e: React.MouseEvent, id: number) => {
      const filterItems = items.filter((item) => item.id !== id);
      setItems(filterItems);
    },
    [items]
  );

  const markTodo = useCallback(
    (e: React.MouseEvent, id: number) => {
      const arr: CurrentType[] = items.map((item: CurrentType) => {
        if (id === item.id) {
          item.markVariableTodo = !item.markVariableTodo;
        }
        return item;
      });
      setItems(arr);
      console.log(items);
    },
    [items]
  );

  const allMarkTodo = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const arr: CurrentType[] = items.map((item: CurrentType) => {
        item.markVariableTodo = true;
        return item;
      });
      setItems(arr);
    },
    [items]
  );

  const deleteAllMarkTodo = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const filterArr = items.filter((items) => !items.markVariableTodo);
      setItems(filterArr);
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
