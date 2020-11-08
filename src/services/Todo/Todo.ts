import ITodo from "./ITodo";

export default class Todo implements ITodo {
    task: string;
    isDone: boolean;
    readonly creationDate: Date;

    constructor(task: string, isDone: boolean) {
        this.task = task;
        this.isDone = isDone;
        this.creationDate = new Date();
    }
}