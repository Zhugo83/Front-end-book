import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAuthor } from '../services/api';
import '../css/AuthorForm.css'; // Import the CSS file

function AuthorForm() {
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAuthor({ name, birthYear: parseInt(birthYear) });
      navigate('/authors');
    } catch (error) {
      console.error('Error creating author:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="heading"><i className="fas fa-user-plus"></i> Add New Author</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-group">
          <label className="label"><i className="fas fa-user"></i> Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label"><i className="fas fa-calendar-alt"></i> Birth Year:</label>
          <input
            type="number"
            placeholder="Birth Year"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
            required
            className="input"
          />
        </div>
        <button type="submit" className="submit-button"><i className="fas fa-plus-circle"></i> Add Author</button>
      </form>
    </div>
  );
}

export default AuthorForm;
