import React, { ReactElement, useContext, useState } from 'react';
import { Row, Col } from 'antd';
import { _TodoContext } from '../../infrastructure/store/useTodoStore'
import ITodo from '../../services/Todo/ITodo'
import { CheckCircleFilled, DeleteFilled, EditFilled } from '@ant-design/icons';
import './TodoItem.scss';
import DateTimeHelper from '../../infrastructure/common/DateTimeHelper';

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

function TodoItem({ todo }: Props): ReactElement {
    const [isComplete, setIsComplete] = useState<boolean>();
    const { todoService } = useContext(_TodoContext);

    const handleDeleteClick = (event: React.MouseEvent<HTMLDivElement>) => {
        todoService.deleteTodo(todo.id);
    }

    return (
        <div className="todo-item">
            <Row align="middle">
                <Col span={4}>
                    <DeleteFilled onClick={handleDeleteClick} className="todo-icon cursor-pointer" />
                    <EditFilled className="todo-icon cursor-pointer" />
                    <CheckCircleFilled className="todo-icon cursor-pointer" />
                </Col>
                <Col span={14}>
                    <Row className="flex-column" wrap={false} >
                        <Col>
                            <h1 className="todo-title">{todo.task}</h1>
                        </Col>
                        <Col>
                            <p className="todo-creationtime">{dateTimeHelper.readableDateFormat(todo.creationDate)}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default TodoItem