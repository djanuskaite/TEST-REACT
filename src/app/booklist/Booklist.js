import React from 'react';
import Book from '../book/Book';
import './booklist.css';

function Booklist() {
    return (

        <div className='bookList'>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
        </div>
    )
}
export default Booklist;