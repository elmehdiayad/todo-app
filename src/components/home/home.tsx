import React, { FunctionComponent } from "react";
import Todo, { TodoProps } from "../common/todo/todo";
import TodoForm from "./form";
import Styles from "./home.styles";
import { useSelector } from "react-redux";

const selectTodos = (state: any) => state.todos;

const Home: FunctionComponent = () => {
  const todos = useSelector(selectTodos);

  return (
    <Styles.Container>
      <TodoForm />
      <Styles.Todos>
        {todos.map((todo: TodoProps) => (
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
        ))}
      </Styles.Todos>
    </Styles.Container>
  );
};

export default Home;
