import React, { ChangeEvent, FC, MouseEvent, useCallback } from "react";
import styled from "styled-components";
import { Input } from "../../../Inp/Inp";
import { ID } from "../../../../App";

interface DivType {
  text: string;
  changeTodo: (e: ChangeEvent<HTMLInputElement>, id: ID) => void;
  markTodo: (id: ID) => void;
  markVariableTodo: boolean;
  id: ID;
}

const DarkLightDiv: FC<DivType> = ({
  markTodo,
  id,
  changeTodo,
  markVariableTodo,
  text,
}) => {
  const markTodoMethod = useCallback(
    (e: MouseEvent): void => {
      markTodo(id);
      e.preventDefault();
    },
    [id, markTodo]
  );

  return (
    <>
      {!markVariableTodo ? (
        <LightDiv onClick={(e: MouseEvent) => markTodoMethod(e)}>
          <LightInput
            type="text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeTodo(e, id)
            }
            onClick={(e: MouseEvent) => e.stopPropagation()}
          />
        </LightDiv>
      ) : (
        <DarkDiv onClick={(e) => markTodoMethod(e)}>
          <DarkInput
            type="text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeTodo(e, id)
            }
            onClick={(e: MouseEvent) => e.stopPropagation()}
          />
        </DarkDiv>
      )}
    </>
  );
};

export default DarkLightDiv;

const LightInput = styled(Input)`
  font-size: 30px;
  color: white;
  background-color: lightblue;
  border: 0;
  &:focus {
    outline: none;
  }
`;
const DarkInput = styled(Input)`
  font-size: 30px;
  color: white;
  background-color: darkblue;
  border: 0;

  &:focus {
    outline: none;
  }
`;
const LightDiv = styled.div`
  border: 1px solid #000;
  border-radius: 15px;
  padding: 20px;
  color: white;
  background-color: lightblue;
`;

const DarkDiv = styled.div`
  border: 1px solid #000;
  border-radius: 15px;
  padding: 20px;
  color: white;
  background-color: darkblue;
`;
