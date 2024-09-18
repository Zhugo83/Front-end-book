import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneBook } from '../services/api';
import '../css/BookDetail.css'; // Import the CSS file

function BookDetail() {
  const [book, setBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOneBook(id).then(setBook);
  }, [id]);

  if (!book) return <div className="loading">Loading...</div>;

  return (
    <div className="detail-container">
      <h2 className="heading"><i className="fas fa-book"></i> {book.title}</h2>
      <p className="info"><i className="fas fa-barcode"></i> ISBN: {book.isbn}</p>
      <p className="info"><i className="fas fa-calendar-alt"></i> Published Year: {book.publishedYear}</p>
      <Link to="/books" className="back-link"><i className="fas fa-arrow-left"></i> Back to Books</Link>
    </div>
  );
}

export default BookDetail;
