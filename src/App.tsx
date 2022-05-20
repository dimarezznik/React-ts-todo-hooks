import React, { FormEvent, useCallback, useState } from "react";
import styled from "styled-components";
import Form from "./components/Form/Form";
import Todo from "./components/Todo/Todo";

export type ID = number;
export type CurrentType = {
  id: ID;
  text: string;
  markVariableTodo: boolean;
};

function App() {
  const [items, setItems] = useState<CurrentType[]>([]);

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
      <Form
        setItems={setItems}
        items={items}
        allMarkTodo={allMarkTodo}
        deleteAllMarkTodo={deleteAllMarkTodo}
      />
      <Todo
        items={items}
        setItems={setItems}
        deleteTodo={deleteTodo}
        markTodo={markTodo}
      />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  background: darkorchid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
