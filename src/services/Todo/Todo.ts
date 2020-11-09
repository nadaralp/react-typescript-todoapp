import { v4 as uuidv4 } from 'uuid';
import ITodo from "./ITodo";

export default class Todo implements ITodo {
    id: string;
    task: string;
    isDone: boolean;
    readonly creationDate: Date;

    constructor(task: string, isDone: boolean = false) {
        this.id = uuidv4();
        this.task = task;
        this.isDone = isDone;
        this.creationDate = new Date();
    }
}