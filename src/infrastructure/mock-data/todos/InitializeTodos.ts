import ITodo from "../../../services/Todo/ITodo";

export default function getMockTodos(): ITodo[] {
    return require('./mock-todos.json') as ITodo[];
}