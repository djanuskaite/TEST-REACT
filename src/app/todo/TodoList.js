import React from 'react'
import Todo from './Todo'
import './ToDo.css';

export default function TodoList({ todos, toggleTodo }) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}