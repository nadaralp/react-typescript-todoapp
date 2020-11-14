import Todo from "../../services/Todo/Todo";

export interface ITodoStore {
    name: string;
    changeName(name: string) : void;
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    removeTodo: (todo: Todo) => void;
}
