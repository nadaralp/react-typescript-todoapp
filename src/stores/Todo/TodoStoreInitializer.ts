import { ITodoStore, TodoStore } from ".";
import getMockTodos from "../../infrastructure/mock-data/todos/InitializeTodos";
import Todo from "../../services/Todo/Todo";

console.log('running to do store initializer');

const todos: Todo[] = getMockTodos();
const todoStore: ITodoStore = new TodoStore(todos);

export default todoStore;