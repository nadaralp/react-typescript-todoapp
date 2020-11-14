import Search from "antd/lib/input/Search";
import React, { ReactElement, useState } from "react";
import Todo from "../../services/Todo/Todo";
import { useTodoStoreContext } from "../../stores/Todo";

interface Props {}

type Inputs = {
    task: string;
};

function TodoForm({}: Props): ReactElement {
    const [formState, setFormState] = useState<Inputs>({ task: "" });
    const { addTodo } = useTodoStoreContext();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const onSubmitHandle = (e: React.FormEvent): void => {
        console.log("here");
        e.preventDefault();
        addTodo(new Todo(formState.task));
    };

    const onSearchHandle = (e: string): void => {
        addTodo(new Todo(formState.task));
    };

    return (
        <form onSubmit={onSubmitHandle} className="todo-form">
            {/* <input name="todo" type="text" placeholder="Todo item" ref={register({ required: true })} />
            <p>{errors.todo && "todo is required"}</p>
            <button type="submit">Add Todo</button> */}
            <Search
                name="task"
                className="add-"
                placeholder="Do homework"
                allowClear
                enterButton="Add Task"
                size="large"
                onChange={onChange}
                onSearch={onSearchHandle}
            />
        </form>
    );
}

export default TodoForm;
