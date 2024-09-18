import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';
import '../css/Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="container">
      <h1 className="title">Projet Back end - Front end</h1>
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">Section</th>
            <th className="table-header">Description</th>
          </tr>
        </thead>
        <tbody>
          {!isAuthenticated() && (
            <>
              <tr>
                <td className="table-cell">
                  <Link to="/register" className="link">
                    <i className="fas fa-user-plus icon"></i> Register
                  </Link>
                </td>
                <td className="table-cell">Create a new account</td>
              </tr>
              <tr>
                <td className="table-cell">
                  <Link to="/login" className="link">
                    <i className="fas fa-sign-in-alt icon"></i> Login
                  </Link>
                </td>
                <td className="table-cell">Access your account</td>
              </tr>
            </>
          )}
          {isAuthenticated() && (
            <>
              <tr>
                <td className="table-cell">
                  <Link to="/books" className="link">
                    <i className="fas fa-book icon"></i> Books
                  </Link>
                </td>
                <td className="table-cell">View and manage the book collection</td>
              </tr>
              <tr>
                <td className="table-cell">
                  <Link to="/authors" className="link">
                    <i className="fas fa-user-edit icon"></i> Authors
                  </Link>
                </td>
                <td className="table-cell">View and manage the author list</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;