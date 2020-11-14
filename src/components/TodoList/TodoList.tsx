import { observer, useObserver } from "mobx-react-lite";
import React, { ReactElement } from "react";
import { useTodoStoreContext } from "../../stores/Todo";
import TodoTitle from "../Todo/components/TodoTitle";
import TodoItem from "../TodoItem/TodoItem";

interface Props {}

const TodoList = observer(({}: Props) => {
    const { todos } = useTodoStoreContext();

    console.log("rendering todo list");

    return (
        <section>
            <TodoTitle />
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </section>
    );
})

export default TodoList;
