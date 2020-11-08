import React, { ReactElement } from 'react'
import { useState } from 'react';
import ITodo from '../../services/Todo/ITodo';
import ITodoService from '../../services/Todo/ITodoService';
import TodoService from '../../services/Todo/TodoService';
import getMockTodos from '../mock-data/todos/InitializeTodos';
import ITodoStore from './ITodoStore';

export let _TodoContext: React.Context<ITodoStore>;

function useTodoStore() {
    const [todos, setTodos] = useState<ITodo[]>(getMockTodos());
    const todoService: ITodoService = new TodoService(todos, setTodos);

    const todoStore: ITodoStore = {
        todoService
    }

    const TodoContext = React.createContext<ITodoStore>(todoStore);
    _TodoContext = TodoContext;


    return {
        initialTodoStoreValue: todoStore,
        todoService,
        TodoContext
    }
}

export default useTodoStore
