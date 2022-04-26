import React, { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { ID } from "../../../App";
import DarkLightDiv from "./DarkLightDiv/DarkLightDiv";

interface TodoLiType {
  text: string;
  changeTodo: (e: ChangeEvent<HTMLInputElement>, id: ID) => void;
  deleteTodo: (id: ID) => void;
  markTodo: (id: ID) => void;
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
    <Li>
      <DarkLightDiv
        markTodo={markTodo}
        markVariableTodo={markVariableTodo}
        changeTodo={changeTodo}
        text={text}
        id={id}
      />

      <Span
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(id);
        }}
      >
        X
      </Span>
    </Li>
  );
};

export default TodoLi;

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
