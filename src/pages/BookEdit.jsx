import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOneBook, updateBook } from '../services/api';
import '../css/BookEdit.css'; // Import the CSS file

function BookEdit() {
  const [book, setBook] = useState({ title: '', isbn: '', publishedYear: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneBook(id).then(setBook);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id, book);
      navigate('/books');
    } catch (error) {
      console.error('Error updating book:', error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="heading"><i className="fas fa-edit icon"></i> Edit Book</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <i className="fas fa-book icon"></i>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="input"
          />
        </div>
        <div className="input-group">
          <i className="fas fa-barcode icon"></i>
          <input
            type="text"
            name="isbn"
            value={book.isbn}
            onChange={handleChange}
            placeholder="ISBN"
            className="input"
          />
        </div>
        <div className="input-group">
          <i className="fas fa-calendar-alt icon"></i>
          <input
            type="number"
            name="publishedYear"
            value={book.publishedYear}
            onChange={handleChange}
            placeholder="Published Year"
            required
            className="input"
          />
        </div>
        <button type="submit" className="submit-button">
          <i className="fas fa-save button-icon"></i> Update Book
        </button>
      </form>
    </div>
  );
}

export default BookEdit;
