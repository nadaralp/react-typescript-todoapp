import { v4 as uuidv4 } from 'uuid';
import ITodo from "./ITodo";

export default class Todo implements ITodo {
    id: string;
    task: string;
    isDone: boolean;
    readonly creationDate: Date;

    constructor(task: string, isDone: boolean = false, creationDate: string | undefined = undefined) {
        this.id = uuidv4();
        this.task = task;
        this.isDone = isDone;

        if (creationDate) {
            this.creationDate = new Date(creationDate);
        }
        this.creationDate = new Date();
    }
}