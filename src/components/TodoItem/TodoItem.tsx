import React, { ReactElement, useContext, useState } from 'react';
import { Row, Col } from 'antd';
import { _TodoContext } from '../../infrastructure/store/useTodoStore'
import ITodo from '../../services/Todo/ITodo'
import { CheckCircleFilled, DeleteFilled, EditFilled } from '@ant-design/icons';
import './TodoItem.scss';
import DateTimeHelper from '../../infrastructure/common/DateTimeHelper';
import { observer } from 'mobx-react-lite';

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

const dateTimeHelper: DateTimeHelper = new DateTimeHelper();

const TodoItem = observer(({ todo }: Props) => {
    const [isComplete, setIsComplete] = useState<boolean>();
    const { todoService } = useContext(_TodoContext);

    const handleDeleteClick = (event: React.MouseEvent<HTMLDivElement>) => {
        todoService.deleteTodo(todo.id);
    }

    return (
        <div className="todo-item">
            {todo.task}
        </div>
    )
})

export default TodoItem; 