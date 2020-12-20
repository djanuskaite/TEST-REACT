import React from 'react';
import './book.css';
import Sell from "../sell/Sell";

function Book() {
    return (
        <div className='oneBook'>
            <Image />
            <Author />
            <Title />
            <Price />
            <Sell />
        </div>
    )
}

const Image = () => <img src="https://cdn.pixabay.com/photo/2018/04/03/21/12/literature-3288098_1280.jpg" />;
const Author = () => <h2>Authors Name: </h2>;
const Title = () => <h3>Book Title: </h3>;
const Price = () => <p>Price: 12$</p>;
export default Book;