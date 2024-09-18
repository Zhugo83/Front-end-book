import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllAuthors, deleteAuthor } from '../services/api';
import '../css/AuthorList.css'; // Import the CSS file

function AuthorList() {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    try {
      const data = await getAllAuthors();
      setAuthors(data);
    } catch (error) {
      console.error('Error fetching authors:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this author?')) {
      try {
        await deleteAuthor(id);
        fetchAuthors();
      } catch (error) {
        console.error('Error deleting author:', error);
      }
    }
  };

  return (
    <div className="container">
      <h2 className="heading"><i className="fas fa-user"></i> Authors</h2>
      <div className="button-container">
        <Link to="/authors/add" className="add-button"><i className="fas fa-plus-circle"></i> Add New Author</Link>
      </div>
      <ul className="list">
        {authors.map((author) => (
          <li key={author.id} className="list-item">
            <span className="author-name"><i className="fas fa-user"></i> {author.name}</span> 
            <span className="author-details">(Born: {author.birthYear})</span>
            <div className="button-group">
              <button className="view-button" onClick={() => navigate(`/authors/${author.id}`)}><i className="fas fa-eye"></i> View</button>
              <button className="edit-button" onClick={() => navigate(`/authors/edit/${author.id}`)}><i className="fas fa-edit"></i> Edit</button>
              <button className="delete-button" onClick={() => handleDelete(author.id)}><i className="fas fa-trash-alt"></i> Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorList;
