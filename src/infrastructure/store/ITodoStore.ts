import ITodo from "../../services/Todo/ITodo";
import ITodoService from "../../services/Todo/ITodoService";

export default interface ITodoStore {
    todoService: ITodoService;
}
