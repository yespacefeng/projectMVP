import React from 'react';
import { Link } from 'react-router-dom';

const Signup = ({ onSubmit }) => (
  <div id='signup'>
    <form id='signup-form' onSubmit={event => { onSubmit(event); }}>
      <label>Username:</label><br></br>
      <input type='text' id='username' name='username'></input><br></br>
      <label>Member Number</label><br></br>
      <input type='number' id='member-number' name='member-number'></input><br></br>
      <label>Password:</label><br></br>
      <input type='text' id='password' name='password'></input><br></br>
      <div className='button-container'>
        <button className='singup-btn'>
          <Link to='/singup'>Sign Up</Link>
        </button>
        <button className='login-btn'>LogIn</button>
      </div>
    </form>
  </div>
)

export default Signup;