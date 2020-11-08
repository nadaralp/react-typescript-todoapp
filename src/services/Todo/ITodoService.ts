import ITodo from "./ITodo";

export default interface ITodoService {
    setIsDone(todo: ITodo, state: boolean): void;
    setTask(todo: ITodo, task: string): void;
}