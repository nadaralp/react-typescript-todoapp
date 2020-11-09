import React, { ReactElement } from 'react'
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import './Todo.scss';

interface Props {

}

function Todo({ }: Props): ReactElement {
    return (
        <main id="todo">
            <TodoList />
            <TodoForm />
        </main>
    )
}

export default Todo
