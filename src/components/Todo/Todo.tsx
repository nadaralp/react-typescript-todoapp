import { observer } from "mobx-react";
import React, { ReactElement } from "react";
import TodoForm from "../TodoForm/TodoForm";
import { TodoList } from "../TodoList";
import "./Todo.scss";

interface Props {}

function Todo({}: Props): ReactElement {
    return (
        <main id="todo">
            <TodoList />
            <TodoForm />
        </main>
    );
}

export default observer(Todo);
