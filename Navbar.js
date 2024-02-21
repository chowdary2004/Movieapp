import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';

export default function Navbar({ onSearch }) {
  const [query, setQuery] = useState('');

  return (
    <div className='navbar'>
      <h1>Rishi MovieTB</h1>
      <ul className='nav'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movie</Link>
        </li>
        <li>
          <Link to="/tv">Tv</Link>
        </li>
        <li>
          <Link to="/favMov">Movie Library</Link>
        </li>
        <li>
          <Link to="/favTv">Tv Library</Link>
        </li>
      </ul>

      <div className='search'>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <button onClick={() => onSearch(query)}>Search</button>
      </div>

      
      <Link to="/login">
        <button className="login-button">Login/Signup</button>
      </Link>
    </div>
  );
}