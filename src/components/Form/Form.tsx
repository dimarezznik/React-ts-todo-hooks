import React, {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useCallback,
  useState,
} from "react";
import styled from "styled-components";
import FormButton from "./FormButton";
import { CurrentType } from "../../App";
import InputUI from "../InputUI/InputUI";

interface FormProps {
  items: CurrentType[];
  setItems: Dispatch<SetStateAction<CurrentType[]>>;
  allMarkTodo: (e: FormEvent<HTMLButtonElement>) => void;
  deleteAllMarkTodo: (e: FormEvent<HTMLButtonElement>) => void;
}

const Form: FC<FormProps> = React.memo(
  ({ allMarkTodo, items, deleteAllMarkTodo, setItems }) => {
    const [textInp, setTextInp] = useState<string>("");

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
      [items, textInp, setItems]
    );
    return (
      <form>
        <InputUI textInp={textInp} setTextInp={setTextInp} />
        <FormButton
          addTodo={addTodo}
          allMarkTodo={allMarkTodo}
          deleteAllMarkTodo={deleteAllMarkTodo}
        />
      </form>
    );
  }
);

export default Form;

export const Input = styled.input`
  font-size: 25px;
  padding: 20px;
  border-radius: 10px;
`;
