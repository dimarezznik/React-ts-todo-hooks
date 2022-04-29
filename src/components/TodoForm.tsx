import React, { FC } from "react";
import styled from "styled-components";
import Form from "./Form/Form";
import Todo from "./Todo/Todo";

const TodoForm: FC = () => {
  return (
    <Div>
      <Form />
      <Todo />
    </Div>
  );
};

export default TodoForm;

const Div = styled.div`
  font-size: 50px;
  font-weight: 600;
`;
