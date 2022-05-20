import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { Input } from "../../Form/Form";
import { ID } from "../../../App";

interface TodoLiType {
  text: string;
  changeTodo: (e: ChangeEvent<HTMLInputElement>, id: ID) => void;
  deleteTodo: (e: React.MouseEvent, id: ID) => void;
  markTodo: (e: React.MouseEvent, id: ID) => void;
  markVariableTodo: boolean;
  id: ID;
}

const TodoItem: FC<TodoLiType> = React.memo(
  ({ text, changeTodo, id, deleteTodo, markTodo, markVariableTodo }) => {
    const updateTodo = (e: ChangeEvent<HTMLInputElement>) => {
      changeTodo(e, id);
    };

    const removeTodo = (e: React.MouseEvent) => {
      e.stopPropagation();
      deleteTodo(e, id);
    };

    const propagationStop = (e: any) => e.stopPropagation();
    return (
      <Li onClick={(e) => markTodo(e, id)}>
        {!markVariableTodo ? (
          <LightDiv>
            <LightInput
              type="text"
              value={text}
              onChange={updateTodo}
              onClick={propagationStop}
            />
          </LightDiv>
        ) : (
          <DarkDiv>
            <DarkInput
              type="text"
              value={text}
              onChange={updateTodo}
              onClick={propagationStop}
            />
          </DarkDiv>
        )}

        <Span onClick={removeTodo}>X</Span>
      </Li>
    );
  }
);

export default TodoItem;

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

const Li = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Span = styled.span`
  cursor: pointer;
  color: red;
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
