import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllBooks, deleteBook } from '../services/api';
import '../css/BookList.css'; // Import the CSS file

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await getAllBooks();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(id);
        fetchBooks(); // Reload books after deletion
      } catch (error) {
        console.error('Error deleting book:', error);
      }
    }
  };

  return (
    <div className="container">
      <h2 className="heading"><i className="fas fa-book"></i> Books</h2>
      <div className="button-container">
        <Link to="/books/add" className="add-button">
          <i className="fas fa-plus-circle"></i> Add New Book
        </Link>
      </div>
      <ul className="list">
        {books.map((book) => (
          <li key={book.id} className="list-item">
            <div className="book-info">
              <span className="book-title"><i className="fas fa-book"></i> {book.title}</span> 
              <span className="book-year">({book.publishedYear})</span>
            </div>
            <div className="actions">
              <button onClick={() => navigate(`/books/${book.id}`)} className="view-button">
                <i className="fas fa-eye"></i> View
              </button>
              <button onClick={() => navigate(`/books/edit/${book.id}`)} className="edit-button">
                <i className="fas fa-edit"></i> Edit
              </button>
              <button onClick={() => handleDelete(book.id)} className="delete-button">
                <i className="fas fa-trash-alt"></i> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
