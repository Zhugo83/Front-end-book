import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, logout } from '../services/auth';

function Header({ isLoggedIn, setIsLoggedIn }) {
  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);  // Updates the state to reload the header
  };

  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link to="/" style={linkStyle}><i className="fas fa-home"></i> Home</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li style={navItemStyle}>
                <Link to="/books" style={linkStyle}><i className="fas fa-book"></i> Books</Link>
              </li>
              <li style={navItemStyle}>
                <Link to="/authors" style={linkStyle}><i className="fas fa-user"></i> Authors</Link>
              </li>
              <li style={navItemStyle}>
                <button onClick={handleLogout} style={buttonStyle}><i className="fas fa-sign-out-alt"></i> Logout</button>
              </li>
            </>
          ) : (
            <>
              <li style={navItemStyle}>
                <Link to="/login" style={linkStyle}><i className="fas fa-sign-in-alt"></i> Login</Link>
              </li>
              <li style={navItemStyle}>
                <Link to="/register" style={linkStyle}><i className="fas fa-user-plus"></i> Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

// Styles
const headerStyle = {
  backgroundColor: '#333',
  padding: '10px 20px',
  color: '#fff',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navListStyle = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
};

const navItemStyle = {
  margin: '0 10px',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
};

const buttonStyle = {
  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

export default Header;
