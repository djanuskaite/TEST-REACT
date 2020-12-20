import React, { useState } from 'react'
import './sign.css';

const VideoState = () => {
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState('blue')

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1)
    }

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1)
        setTheme('red')
    }

    return (
        <div className='mb-5'>
            <h1>UseState [HOOKS]</h1>
            <button className='zenklas' onClick={decrementCount}>-</button>
            <span>{count}</span>
            <span>{theme}</span>
            <button className='zenklas' onClick={incrementCount}>+</button>
            <h1>LIST OF BOOKS</h1>
        </div>
    )


}
export default VideoState