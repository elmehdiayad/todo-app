import React, { FunctionComponent } from "react";
import Styles from "./todo.styles";

export interface TodoProps {
  id?: number;
  title: string;
  description?: string;
}

const Todo: FunctionComponent<TodoProps> = ({ title, description }) => (
  <Styles.Container>
    <Styles.Title>{title}</Styles.Title>
    <Styles.Description>{description}</Styles.Description>
  </Styles.Container>
);

export default Todo;
