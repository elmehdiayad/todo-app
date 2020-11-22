import React, { FunctionComponent } from "react";
import Styles from "./todo.styles";

interface Props {
  title: string;
  description?: string;
}

const Todo: FunctionComponent<Props> = ({ title, description }) => (
  <Styles.Container>
    <Styles.Title>{title}</Styles.Title>
    <Styles.Description>{description}</Styles.Description>
  </Styles.Container>
);

export default Todo;
