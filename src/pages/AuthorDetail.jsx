import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOneAuthor } from '../services/api';
import '../css/AuthorDetail.css'; // Import the CSS file

function AuthorDetail() {
  const [author, setAuthor] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOneAuthor(id).then(setAuthor);
  }, [id]);

  if (!author) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <h2 className="heading"><i className="fas fa-user"></i> {author.name}</h2>
      <p className="info"><i className="fas fa-calendar-alt"></i> Birth Year: {author.birthYear}</p>
      <Link to="/authors" className="link"><i className="fas fa-arrow-left"></i> Back to Authors</Link>
    </div>
  );
}

export default AuthorDetail;
