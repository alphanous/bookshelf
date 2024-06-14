import React from 'react'
import { useState } from 'react';
import BookCard from './BookCard';
import './BookSearch.css'

const BookSearch = (addToBookshelf) => {

    const [input, setinput] = useState('');
    const [result, setresult] = useState([])

    const handleValue = async (e) => {
        setinput(e.target.value);
        if (e.target.value.length > 2) {
            const response = await fetch(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
            const data = await response.json();
            console.log(data.docs)
            setresult(data.docs);
        }
        else{
            setresult([])
        }
    }

    return (
        <>
        <div className="book_search">
            <h3>search book</h3>
            <input
                type="text"
                value={input}
                onChange={handleValue}
                placeholder='search for books'
            />
        </div>
        <div className="result">
                {result.map(book=>(
                    <BookCard key={book.key} book={book} onAdd={addToBookshelf}/>
                ))}
            </div>
        </>
    )
}

export default BookSearch