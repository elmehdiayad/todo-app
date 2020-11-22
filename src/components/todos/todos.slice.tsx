import { TodoProps } from "../common/todo/todo";

interface TodoAction {
  type: string;
  payload: TodoProps;
}

const initialTodos: Array<TodoProps> = [
  {
    id: 0,
    title: "ETQDev, je veux initialiser le projet à l'aide de create-react-app",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta .",
  },
  {
    id: 1,
    title: "ETQDev, je veux initialiser le projet à l'aide de create-react-app",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta .",
  },
  {
    id: 2,
    title: "ETQDev, je veux initialiser le projet à l'aide de create-react-app",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta .",
  },
];

const nextTodoId = (todos: Array<TodoProps>): number => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const todosReducer = (state = initialTodos, action: TodoAction) => {
  switch (action.type) {
    case "todos/todoAdded": {
      // Can return just the new todos array - no extra object around it
      return [
        ...state,
        {
          id: nextTodoId(state),
          title: action.payload.title,
          description: action.payload.description,
        },
      ];
    }
    default:
      return state;
  }
};

export default todosReducer;
