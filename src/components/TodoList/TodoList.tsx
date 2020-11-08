import React, { ReactElement, useState } from 'react'
import getMockTodos from '../../infrastructure/mock-data/todos/InitializeTodos'
import { renderTodos } from './TodoList.functions';
import ITodo from '../../services/Todo/ITodo'

interface Props {
}

function TodoList({ }: Props): ReactElement {
    const [todos, setTodos] = useState<ITodo[]>(getMockTodos());

    return (
        <section>
            {renderTodos(todos)}
        </section>
    )
}

export default TodoList
