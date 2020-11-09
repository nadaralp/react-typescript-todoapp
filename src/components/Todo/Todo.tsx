import React, { ReactElement } from 'react'
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

interface Props {

}

function Todo({ }: Props): ReactElement {
    return (
        <main>
            <TodoList />
            <TodoForm />
        </main>
    )
}

export default Todo
