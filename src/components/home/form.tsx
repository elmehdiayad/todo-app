import React, { FunctionComponent, useState } from "react";
import Styles from "./home.styles";
import AddIcon from "../../assets/images/add.svg";
import { TodoProps } from "../common/todo/todo";

interface Props {
  addTodo(todo: TodoProps): void;
}

const TodoForm: FunctionComponent<Props> = ({ addTodo }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const onChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (event.currentTarget.name === "title")
      setTitle(event.currentTarget.value);
    if (event.currentTarget.name === "description")
      setDescription(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const todo = { title, description };
    addTodo(todo);
  };

  return (
    <Styles.Form.Container onSubmit={(event) => onSubmit(event)}>
      <Styles.Form.TitleInput
        name="title"
        placeholder="Title"
        required
        onChange={(event) => onChange(event)}
      />
      <Styles.Form.DescriptionInput
        name="description"
        placeholder="Description"
        onChange={(event) => onChange(event)}
      />
      <Styles.Form.Button type="submit">
        <Styles.Form.Icon src={AddIcon} alt="Ajouter" />
        Ajouter
      </Styles.Form.Button>
    </Styles.Form.Container>
  );
};

export default TodoForm;
