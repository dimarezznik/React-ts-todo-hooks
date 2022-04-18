import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { Input } from "../../Form/Form";
import { CurrentType, ID } from "../../../App";

interface TodoLiType {
  text: string;
  changeTodo: (e: ChangeEvent<HTMLInputElement>, id: ID) => void;
  deleteTodo: (e: React.MouseEvent, id: ID) => void;
  markTodo: (e: React.MouseEvent, id: ID) => void;
  markVariableTodo: boolean;
  id: ID;
}

const TodoLi: FC<TodoLiType> = ({
  text,
  changeTodo,
  id,
  deleteTodo,
  markTodo,
  markVariableTodo,
}) => {
  return (
    <Li onClick={(e) => markTodo(e, id)}>
      {!markVariableTodo ? (
        <LightDiv>
          <LightInput
            type="text"
            value={text}
            onChange={(e) => changeTodo(e, id)}
            onClick={(e) => e.stopPropagation()}
          />
        </LightDiv>
      ) : (
        <DarkDiv>
          <DarkInput
            type="text"
            value={text}
            onChange={(e) => changeTodo(e, id)}
            onClick={(e) => e.stopPropagation()}
          />
        </DarkDiv>
      )}

      <Span
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(e, id);
        }}
      >
        X
      </Span>
    </Li>
  );
};

export default TodoLi;

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
