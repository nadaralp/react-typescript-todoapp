import React, { ReactElement, useContext, useState } from 'react'
import getMockTodos from '../../infrastructure/mock-data/todos/InitializeTodos'
import { renderTodos } from './TodoList.functions';
import ITodo from '../../services/Todo/ITodo'
import { _TodoContext } from '../../infrastructure/store/useTodoStore';

interface Props {
}

function TodoList({ }: Props): ReactElement {
    const { todoService } = useContext(_TodoContext);

    return (
        <section>
            {renderTodos(todoService.getTodoItems)}
        </section>
    )
}

export default TodoList
