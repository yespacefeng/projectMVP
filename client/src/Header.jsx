import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ loggedin }) => (
  <div id='header'>
    <h1 className='bank-name'>Hackers Bank</h1>
    <div id='nav-container'>
      <Link className='nav' to='/'>Home</Link>
      { loggedin ? <Link className='nav' to='/activities'>Activities</Link> : null }
      { loggedin ? null : <Link className='nav' to='/login'>LogIn</Link> }
      { loggedin ? null : <Link className='nav' to='/signup'>SignUp</Link> }
    </div>
  </div>
)

export default Header;