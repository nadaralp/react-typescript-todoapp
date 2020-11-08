import React, { ReactElement } from 'react'
import { TodoFormOnSubmit } from './TodoForm.functions'

interface Props {

}

function TodoForm({ }: Props): ReactElement {
    return (
        <form onSubmit={TodoFormOnSubmit} className="todo-form">
            <input type="text" placeholder="Todo item" />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoForm
