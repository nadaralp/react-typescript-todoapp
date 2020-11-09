import ITodo from "./ITodo";

export default interface ITodoService {
    getTodoItems: ITodo[];
    addTodo(todo: ITodo): void;
    deleteTodo(id: string): void;
}