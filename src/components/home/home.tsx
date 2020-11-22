import React, { FunctionComponent } from "react";
import Todo from "../common/todo/todo";
import TodoForm from "./form";
import Styles from "./home.styles";

const Home: FunctionComponent = () => (
  <Styles.Container>
    <TodoForm />
    <Styles.Todos>
      <Todo
        title="ETQDev, je veux initialiser le projet à l'aide de create-react-app"
        description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta ."
      />
    </Styles.Todos>
  </Styles.Container>
);

export default Home;
