import styled from "styled-components";
import TodoForm from "./components/TodoForm";

export type ID = number;
export type CurrentType = {
  id: ID;
  text: string;
  markVariableTodo: boolean;
};

function App() {
  return (
    <Wrapper>
      <TodoForm />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  height: 100vh;
  background: darkorchid;
  display: flex;
  justify-content: center;
  align-items: center;
`;
