import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bookshelf from './components/BookShelf';
import BookSearch from './components/BookSearch';
import { useEffect, useState } from 'react';
function App() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  const removeFromBookshelf = (book) => {
    const updatedBookshelf = bookshelf.filter(b => b.key !== book.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };
  return (
    <>
     <Router>
      <Routes>
        <Route
          path="/"
          element={<BookSearch addToBookshelf={addToBookshelf} />}
        />
        <Route
          path="/bookshelf"
          element={
            <Bookshelf bookshelf={bookshelf} removeFromBookshelf={removeFromBookshelf} />
          }
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;
