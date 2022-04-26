import { ChangeEvent, FC, useCallback } from "react";
import Btn from "./../Btn/Btn";
import Inp from "./../Inp/Inp";

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

  const deleteAllMarkTodoMethod = useCallback((e: MouseEvent) => {
    e.preventDefault();
    deleteAllMarkTodo();
  }, [deleteAllMarkTodo]);

  return (
    <form>
      <Inp
        type="text"
        placeholder="Введите вашу задачу"
        value={textInp}
        changeInput={changeInput}
      />
      <Btn onClick={(e: MouseEvent) => addTodoMethod(e)}>добавить задачу</Btn>
      <Btn onClick={(e: MouseEvent) => allMarkTodoMethod(e)}>отметить все</Btn>
      <Btn onClick={(e: MouseEvent) => deleteAllMarkTodoMethod(e)}>
        удалить отмеченное
      </Btn>
    </form>
  );
};

export default Form;
