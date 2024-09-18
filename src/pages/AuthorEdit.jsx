import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getOneAuthor, updateAuthor } from '../services/api';
import '../css/AuthorEdit.css'; // Import the CSS file

function AuthorEdit() {
  const [author, setAuthor] = useState({ name: '', birthYear: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneAuthor(id).then(setAuthor);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthor((prevAuthor) => ({ ...prevAuthor, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateAuthor(id, author);
      navigate('/authors');
    } catch (error) {
      console.error('Error updating author:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="heading"><i className="fas fa-user-edit"></i> Edit Author</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label className="label"><i className="fas fa-user"></i> Name:</label>
          <input
            type="text"
            name="name"
            value={author.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label"><i className="fas fa-calendar-alt"></i> Birth Year:</label>
          <input
            type="number"
            name="birthYear"
            value={author.birthYear}
            onChange={handleChange}
            placeholder="Birth Year"
            required
            className="input"
          />
        </div>
        <button type="submit" className="submit-button">
          <i className="fas fa-save"></i> Update Author
        </button>
      </form>
    </div>
  );
}

export default AuthorEdit;
