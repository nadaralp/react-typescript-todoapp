import React, { ReactElement, useContext, useState } from 'react'
import { _TodoContext } from '../../infrastructure/store/useTodoStore'
import ITodo from '../../services/Todo/ITodo'
import { renderTextBasedOnCondition } from './TodoItem.functions'

interface Props {
    todo: ITodo
}

// Ref
// Dom element
// Context
// Type guarding
// Fetching
// Dom elements
// Nice

function TodoItem({ todo }: Props): ReactElement {
    const { todoService } = useContext(_TodoContext);

    const handleTodoClick = (event: React.MouseEvent<HTMLDivElement>) => {
        todoService.deleteTodo(todo.id);
    }

    return (
        <div>
            <h1>{todo.task}</h1>
            {renderTextBasedOnCondition(todo.isDone, "Task has been completed", "Task yet to be completed")}
        </div>
    )
}

export default TodoItem