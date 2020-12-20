import React, { useState, useRef, useEffect } from 'react';
import Main from "../main/Main";
import TodoList from '../todo/TodoList'
import './app.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

    const [todos, setTodos] = useState([])
    const todoNameRef = useRef()

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
        if (storedTodos) setTodos(storedTodos)
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id) {
        const newTodos = [...todos]
        const todo = newTodos.find(todo => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    function handleAddTodo(e) {
        const name = todoNameRef.current.value
        if (name === '') return
        setTodos(prevTodos => {
            return [...prevTodos, { name: name, complete: false }]
        })
        todoNameRef.current.value = null
    }

    function handleClearTodos() {
        const newTodos = todos.filter(todo => !todo.complete)
        setTodos(newTodos)
    }

    return (
        <div className='viskas'>
            <div className='tableTODO'>
                <h1>TO-DO LIST</h1>
                <TodoList todos={todos} toggleTodo={toggleTodo} />
                <input ref={todoNameRef} type="text" className='inputas' />
                <button className='butonas' onClick={handleAddTodo}>Add Todo</button>
                <button className='butonas' onClick={handleClearTodos}>Clear Complete</button>
                <div id='lefttodo'>{todos.filter(todo => !todo.complete).length} left to do</div>
            </div>
            <div className='mainPart'>
                <Main />
            </div>

        </div>
    )
}

export default App