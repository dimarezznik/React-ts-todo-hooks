import React, { FC, useCallback } from "react";
import styled from "styled-components";
import { ID } from "../../../App";
import DarkLightDiv from "./DarkLightDiv/DarkLightDiv";
import { todoStorage } from "../../../todoStorage";

interface TodoLiType {
  text: string;
  markVariableTodo: boolean;
  id: ID;
}

const TodoLi: FC<TodoLiType> = ({ text, id, markVariableTodo }) => {
  const [, updateState] = React.useState<any>();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const handleDeleteTodo = useCallback(
    (id: ID) => {
      todoStorage.deleteTodo(id);
      forceUpdate();
    },
    [forceUpdate]
  );

  return (
    <Li>
      <DarkLightDiv markVariableTodo={markVariableTodo} text={text} id={id} />

      <Span
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteTodo(id);
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
