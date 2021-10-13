import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ loggedin, onClick }) => (
  <div id='header'>
    <h1 className='bank-name'>Hackers Bank</h1>
    <div id='nav-container'>
      <Link className='nav' to='/'>Home</Link>
      { loggedin ? null : <Link className='nav' to='/login'>LogIn</Link> }
      { loggedin ? null : <Link className='nav' to='/signup'>SignUp</Link> }
      { loggedin ? <Link className='nav' to='/activities'>Activities</Link> : null }
      { loggedin ? <Link className='nav' to='/settings'>Account Settings</Link> : null }
      { loggedin ? <Link className='nav' to='/' onClick={() => {onClick()}}>Log Out</Link> : null }
    </div>
  </div>
)

export default Header;