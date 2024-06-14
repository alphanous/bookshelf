import React from 'react';
import BookCard from '../components/BookCard';

const Bookshelf = ({ bookshelf, removeFromBookshelf }) => (
  <div>
    <h1>My Bookshelf</h1>
    <div className="bookshelf">
      {bookshelf.map(book => (
        <BookCard key={book.key} book={book} onAdd={removeFromBookshelf} />
      ))}
    </div>
    <button onClick={() => window.location.href='/'}>Back to Search</button>
  </div>
);

export default Bookshelf;
