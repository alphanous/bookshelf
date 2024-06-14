import React from 'react'
import './BookCard.css'

const BookCard = ({book,onAdd}) => {
  return (
    <div className='book_card'>
        <h3>Book Title: {book.title}</h3>
        <p>Author Name: {book.author_name[0]}</p>
        <button>Add to bookshelf</button>
    </div>
  )
}

export default BookCard