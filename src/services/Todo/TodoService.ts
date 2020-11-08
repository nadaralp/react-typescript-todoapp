import ITodo from "./ITodo";
import ITodoService from "./ITodoService";

export default class TodoService implements ITodoService {
    setIsDone(todo: ITodo, state: boolean): void {
        todo.isDone = state;
    }

    setTask(todo: ITodo, task: string): void {
        todo.task = task;
    }
}

