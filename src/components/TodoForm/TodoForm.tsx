import React, { FormEvent, ReactElement, useContext } from 'react'
import { _TodoContext } from '../../infrastructure/store/useTodoStore';
import ITodo from '../../services/Todo/ITodo';
import Todo from '../../services/Todo/Todo';

interface Props {

}

function TodoForm({ }: Props): ReactElement {

    const { todoService } = useContext(_TodoContext);

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('hi');

        const newTodo: ITodo = new Todo("This is a test task", false);
        todoService.addTodo(newTodo);
    }

    console.log('rendering');

    return (
        <form onSubmit={onSubmit} className="todo-form">
            <input type="text" placeholder="Todo item" />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm
