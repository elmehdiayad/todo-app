import React, { FunctionComponent } from "react";
import Styles from "./todo.styles";
import { useDispatch } from "react-redux";

export interface TodoProps extends Props {
  completed: boolean;
}
interface Props {
  id: number;
  title: string;
  description?: string;
}

const Todo: FunctionComponent<Props> = ({ id, title, description }) => {
  const dispatch = useDispatch();

  const markCompleted = (id: number) => {
    dispatch({ type: "todos/todoCompleted", payload: { id: id } });
  };
  const cancelTodo = (id: number) => {
    dispatch({ type: "todos/todoRemoved", payload: { id: id } });
  };

  return (
    <Styles.Container>
      <Styles.LeftContainer>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Description>{description}</Styles.Description>
      </Styles.LeftContainer>
      <Styles.RightContainer>
        <Styles.Button mode="complete" onClick={() => markCompleted(id)}>
          Terminé
        </Styles.Button>
        <Styles.Button mode="cancel" onClick={() => cancelTodo(id)}>
          {" "}
          Annuler{" "}
        </Styles.Button>
      </Styles.RightContainer>
    </Styles.Container>
  );
};
export default Todo;
