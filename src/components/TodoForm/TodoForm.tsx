import React, { FormEvent, ReactElement, useContext } from 'react'
import { useForm } from 'react-hook-form';
import { _TodoContext } from '../../infrastructure/store/useTodoStore';
import ITodo from '../../services/Todo/ITodo';
import Todo from '../../services/Todo/Todo';

interface Props {

}

type Inputs = {
    todo: string,
};

function TodoForm({ }: Props): ReactElement {
    const { todoService } = useContext(_TodoContext);
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();

    const onSubmit = (data: Inputs): void => {

        todoService.addTodo(new Todo(data.todo));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="todo-form">
            <input name="todo" type="text" placeholder="Todo item" ref={register({ required: true })} />
            <p>{errors.todo && "todo is required"}</p>
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm
