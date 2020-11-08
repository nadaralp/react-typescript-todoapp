import React from 'react';
import { ReactElement } from "react";
import ITodo from "../../services/Todo/ITodo";
import TodoItem from "../TodoItem/TodoItem";

export const renderTodos = (todos: ITodo[]): ReactElement[] => todos.map(todo => <TodoItem todo={todo} />)