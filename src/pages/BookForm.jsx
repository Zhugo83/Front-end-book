import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBook } from '../services/api';
import '../css/BookForm.css'; // Import the CSS file

function BookForm() {
  const [title, setTitle] = useState('');
  const [isbn, setIsbn] = useState('');
  const [publishedYear, setPublishedYear] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBook({ title, isbn, publishedYear: parseInt(publishedYear) });
      navigate('/books');
    } catch (error) {
      console.error('Error creating book:', error);
    }
  };

  return (
    <div className="form-container">
      <h2 className="heading"><i className="fas fa-book-medical"></i> Add New Book</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <i className="fas fa-book icon"></i>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="input-group">
          <i className="fas fa-barcode icon"></i>
          <input
            type="text"
            placeholder="ISBN"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            className="input"
          />
        </div>
        <div className="input-group">
          <i className="fas fa-calendar-alt icon"></i>
          <input
            type="number"
            placeholder="Published Year"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            required
            className="input"
          />
        </div>
        <button type="submit" className="submit-button">
          <i className="fas fa-plus button-icon"></i> Add Book
        </button>
      </form>
    </div>
  );
}

export default BookForm;
