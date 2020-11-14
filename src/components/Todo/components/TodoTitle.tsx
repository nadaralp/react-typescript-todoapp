import { observer, useObserver } from "mobx-react";
import React from "react";
import { useTodoStoreContext } from "../../../stores/Todo";

interface Props {}

const TodoTitle = observer((props: Props) => {
    const { name, changeName } = useTodoStoreContext();

    return (
        <div
            onClick={() => {
                const name: string = Math.floor(Math.random() * 10).toString();
                changeName(name);
            }}
        >
            {name}
        </div>
    );
});

export default TodoTitle;
