import { FC, useEffect } from "react";
import TodoLi from "./TodoLi/TodoLi";
import { CurrentType } from "../../App";
import React from "react";
import { todoStorage } from "../../todoStorage";

const Todo: FC = React.memo(() => {
  const [, updateState] = React.useState<any>();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  useEffect(() => {
    todoStorage.subscribe(forceUpdate);

    return () => todoStorage.unsubscribe(forceUpdate);
  }, [todoStorage.state.items]);

  return (
    <ul>
      {todoStorage.getState().items.map((item: CurrentType) => {
        return (
          <TodoLi
            key={item.id}
            text={item.text}
            id={item.id}
            markVariableTodo={item.markVariableTodo}
          />
        );
      })}
    </ul>
  );
});

export default Todo;
