import React, { createContext, ReactElement, useState } from 'react'
import ITodo from '../../services/Todo/ITodo';
import ITodoService from '../../services/Todo/ITodoService';
import TodoService from '../../services/Todo/TodoService';
import getMockTodos from '../mock-data/todos/InitializeTodos';
import ITodoStore from './ITodoStore';
import useTodoStore from './useTodoStore';
//import { initializeTodoStore } from './TodoStoreInitializer';

interface Props {
    children: ReactElement
}

function TodoProvider({ children }: Props): ReactElement {

    const { TodoContext, initialTodoStoreValue } = useTodoStore();

    return (
        <TodoContext.Provider value={initialTodoStoreValue}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider
