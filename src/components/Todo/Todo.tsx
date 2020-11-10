import React, { ReactElement } from 'react'
import { useContext } from 'react';
import { TestStore } from '../../infrastructure/store/TestStore';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import './Todo.scss';

interface Props {

}

function Todo({ }: Props): ReactElement {
    const { setAniaml, setStoreName } = useContext(TestStore)!;

    setStoreName("fweafgjwaeiuf");


    return (
        <main id="todo">
            <TodoList />
            <TodoForm />
        </main>
    )
}

export default Todo
