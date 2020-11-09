import ITodo from "../../../services/Todo/ITodo";
import Todo from "../../../services/Todo/Todo";

type ITodoDto = Omit<ITodo, "creationDate" | "id"> & { creationDate: string };


export default function getMockTodos(): ITodo[] {
    const ITodosDto: ITodoDto[] = require('./mock-todos.json') as ITodoDto[];

    return ITodosDto.map(todo => {
        return new Todo(todo.task, todo.isDone, todo.creationDate);
    });
}