import React, { FC, MouseEvent, useCallback } from "react";
import styled from "styled-components";
import { Input } from "../../../Inp/Inp";
import { ID } from "../../../../App";
import { todoStorage } from "../../../../todoStorage";

interface DivType {
  text: string;
  markVariableTodo: boolean;
  id: ID;
}

const DarkLightDiv: FC<DivType> = ({ id, markVariableTodo, text }) => {
  const [, updateState] = React.useState<any>();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const markTodoMethod = useCallback(
    (e: MouseEvent): void => {
      e.preventDefault();
      todoStorage.checkedBool(id);
      forceUpdate();
    },
    [forceUpdate]
  );

  const changeTextTodo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, id: ID) => {
      todoStorage.textUpdate(e, id);
      forceUpdate();
    },
    [forceUpdate]
  );

  return (
    <>
      {!markVariableTodo ? (
        <LightDiv onClick={markTodoMethod}>
          <LightInput
            type="text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeTextTodo(e, id)
            }
            onClick={(e: MouseEvent) => e.stopPropagation()}
          />
        </LightDiv>
      ) : (
        <DarkDiv onClick={markTodoMethod}>
          <DarkInput
            type="text"
            value={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              changeTextTodo(e, id)
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
