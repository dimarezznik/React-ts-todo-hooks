import React, { FC, useCallback } from "react";
import Btn from "./../Btn/Btn";
import Inp from "./../Inp/Inp";
import { todoStorage } from "../../todoStorage";

const Form: FC = () => {
  const [, updateState] = React.useState<any>();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const addTodoMethod = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      todoStorage.addTodo();
      forceUpdate();
    },
    [forceUpdate]
  );

  const addToInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      todoStorage.handleInput(e);
      forceUpdate();
    },
    [forceUpdate]
  );

  const allMarkTodoMethod = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      todoStorage.allMarkTodo();
      forceUpdate();
    },
    [forceUpdate]
  );

  const deleteAllMarkTodoMethod = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      todoStorage.deleteMarkTodo();
      forceUpdate();
    },
    [forceUpdate]
  );

  return (
    <form>
      <Inp
        type="text"
        placeholder="Введите вашу задачу"
        value={todoStorage.state.currentItem.text}
        changeInput={addToInput}
      />
      <Btn onClick={addTodoMethod}>добавить задачу</Btn>
      <Btn onClick={allMarkTodoMethod}>отметить все</Btn>
      <Btn onClick={deleteAllMarkTodoMethod}>удалить отмеченное</Btn>
    </form>
  );
};

export default Form;
