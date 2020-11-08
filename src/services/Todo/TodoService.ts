import { Dispatch, SetStateAction } from "react";
import ITodo from "./ITodo";
import ITodoService from "./ITodoService";

export default class TodoService implements ITodoService {
    readonly todos: ITodo[];
    readonly setTodos: Dispatch<SetStateAction<ITodo[]>>;


    constructor(todos: ITodo[], setTodos: Dispatch<SetStateAction<ITodo[]>>) {
        this.todos = todos;
        this.setTodos = setTodos;
    }

    get getTodoItems(): ITodo[] {
        return this.todos;
    }

    addTodo(todo: ITodo): void {
        console.log('in add todo');
        this.setTodos([
            ...this.todos,
            todo
        ]);
    }

}

