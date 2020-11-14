import { action, makeAutoObservable, makeObservable, observable } from "mobx";
import { ITodoStore } from ".";
import Todo from "../../services/Todo/Todo";

export class TodoStore implements ITodoStore {
    @observable todos: Todo[];
    @observable name: string = "Todo App";

    constructor(todos: Todo[]) {
        console.log(todos);
        this.todos = todos;
        makeObservable(this);
    }

    @action
    changeName = (name: string): void =>  {
        this.name = name;
        console.log(this);
    };

    @action addTodo = (todo: Todo): void => {
        console.log(this);
        console.log("here");
        this.todos.push(todo);
        console.log(this.todos);
    };

    @action removeTodo = (todo: Todo): void => {
        console.log(this);
    };
}
