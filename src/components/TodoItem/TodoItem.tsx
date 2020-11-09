import React, { ReactElement, useContext } from 'react';
import { Row, Col } from 'antd';
import { _TodoContext } from '../../infrastructure/store/useTodoStore'
import ITodo from '../../services/Todo/ITodo'
import { renderTextBasedOnCondition } from './TodoItem.functions'
import { CheckCircleFilled, DeleteFilled, EditFilled } from '@ant-design/icons';
import './TodoItem.scss';
import Column from 'antd/lib/table/Column';
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
    const { todoService } = useContext(_TodoContext);

    const handleTodoClick = (event: React.MouseEvent<HTMLDivElement>) => {
        todoService.deleteTodo(todo.id);
    }

    return (
        <div className="todo-item">
            <Row align="middle">
                <Col span={4}>
                    <DeleteFilled className="todo-icon cursor-pointer" />
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