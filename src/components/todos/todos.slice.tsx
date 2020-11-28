import { TodoProps } from "../common/todo/todo";

interface TodoAction {
  type: string;
  payload: TodoProps;
}

const initialTodos: TodoProps[] = [
  {
    id: 0,
    title: "ETQDev, je veux initialiser le projet à l'aide de create-react-app",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta .",
    completed: false,
  },
  {
    id: 1,
    title: "ETQDev, je veux initialiser le projet à l'aide de create-react-app",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta .",
    completed: false,
  },
  {
    id: 2,
    title: "ETQDev, je veux initialiser le projet à l'aide de create-react-app",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta .",
    completed: true,
  },
];

const nextTodoId = (todos: Array<TodoProps>): number => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const todosReducer = (state = initialTodos, action: TodoAction) => {
  switch (action.type) {
    case "todos/todoAdded": {
      return [
        ...state,
        {
          id: nextTodoId(state),
          title: action.payload.title,
          description: action.payload.description,
          completed: false,
        },
      ];
    }
    case "todos/todoCompleted": {
      return state.map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, completed: true }
          : todo;
      });
    }
    case "todos/todoRemoved": {
      return state.filter((todo) => todo.id !== action.payload.id);
    }
    default:
      return state;
  }
};

export default todosReducer;
