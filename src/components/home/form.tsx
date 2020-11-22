import React, { FunctionComponent } from "react";
import Styles from "./home.styles";
import AddIcon from "../../assets/images/add.svg";

const TodoForm: FunctionComponent = () => (
  <Styles.Form.Container>
    <Styles.Form.TitleInput name="title" placeholder="Title" required />
    <Styles.Form.DescriptionInput
      name="description"
      placeholder="Description"
    />
    <Styles.Form.Button type="submit">
      <Styles.Form.Icon src={AddIcon} alt="Ajouter" />
      Ajouter
    </Styles.Form.Button>
  </Styles.Form.Container>
);

export default TodoForm;
