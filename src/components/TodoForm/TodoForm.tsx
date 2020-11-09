import Search from 'antd/lib/input/Search';
import React, { FormEvent, ReactElement, useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { _TodoContext } from '../../infrastructure/store/useTodoStore';
import ITodo from '../../services/Todo/ITodo';
import Todo from '../../services/Todo/Todo';

interface Props {

}

type Inputs = {
    task: string,
};

function TodoForm({ }: Props): ReactElement {
    const { todoService } = useContext(_TodoContext);
    const [formState, setFormState] = useState<Inputs>({ task: "" });


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const addTodo = (): void => {
        todoService.addTodo(new Todo(formState.task));
    }

    return (
        <form onSubmit={addTodo} className="todo-form">
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
                onSearch={addTodo}
            />
        </form>
    )
}

export default TodoForm
