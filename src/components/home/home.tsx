import React, { FunctionComponent, useState } from "react";
import Todo, { TodoProps } from "../common/todo/todo";
import { TODOS } from "./data.constant";
import TodoForm from "./form";
import Styles from "./home.styles";

const Home: FunctionComponent = () => {
  const [todos, setTodos] = useState<Array<TodoProps>>(TODOS);

  const addTodo = (todo: TodoProps): void => {
    const new_todos = todos.concat(todo);
    console.log(new_todos);
    setTodos(new_todos);
  };

  return (
    <Styles.Container>
      <TodoForm addTodo={addTodo} />
      <Styles.Todos>
        {todos.map((todo: TodoProps, index) => (
          <Todo key={index} title={todo.title} description={todo.description} />
        ))}
      </Styles.Todos>
    </Styles.Container>
  );
};

export default Home;
