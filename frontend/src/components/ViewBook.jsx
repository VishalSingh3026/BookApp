import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewBook.css';

const ViewBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    handleView();
  }, []);

  const handleView = async () => {
    try {
      const res = await axios.get('http://localhost:9000/books');
      setBooks(res.data);
    } catch (err) {
      console.log(err);
      alert('Failed to fetch books');
    }
  };

  return (
    <div className="view-book-container">
      <h1>📚 View Book Details</h1>
      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Date:</strong> {book.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBook;