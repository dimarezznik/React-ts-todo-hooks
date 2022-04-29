import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";
import Btn from "./../Btn/Btn";
import Inp from "./../Inp/Inp";
import { todoStorage } from "../../todoStorage";

interface FormProps {
  changeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  addTodo: () => void;
  textInp: string;
  allMarkTodo: () => void;
  deleteAllMarkTodo: () => void;
}

const Form: FC<FormProps> = ({
  changeInput,
  textInp,
  addTodo,
  allMarkTodo,
  deleteAllMarkTodo,
}) => {
  const [_, updateState] = useState<any>();
  const forceUpdate = useCallback(() => updateState({}), []);

  console.log(forceUpdate);

  useEffect(() => {
    todoStorage.subscribe(forceUpdate);

    return todoStorage.unsubscribe(forceUpdate);
  }, []);

  const addTodoMethod = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      addTodo();
    },
    [addTodo]
  );

  const allMarkTodoMethod = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      allMarkTodo();
    },
    [allMarkTodo]
  );

  const deleteAllMarkTodoMethod = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      deleteAllMarkTodo();
    },
    [deleteAllMarkTodo]
  );

  return (
    <form>
      <Inp
        type="text"
        placeholder="Введите вашу задачу"
        value={textInp}
        changeInput={changeInput}
      />
      <Btn onClick={todoStorage.addTodo}>добавить задачу</Btn>
      <Btn onClick={(e: MouseEvent) => allMarkTodoMethod(e)}>отметить все</Btn>
      <Btn onClick={(e: MouseEvent) => deleteAllMarkTodoMethod(e)}>
        удалить отмеченное
      </Btn>
    </form>
  );
};

export default Form;
