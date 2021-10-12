import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div id='home-page'>
    <div className='accounts'>
      <h4>Open a Checking Account Today</h4>
      <h3>Earn up to<br></br> $200 <br></br>when you open an account and refer friends</h3>
      <button className='signup-btn'>
        <Link to='/signup'>Sign Up
        </Link>
      </button>
    </div>
    <div className='accounts'>
      <h4>Open a Savings Account Today</h4>
      <h3>Earn<br></br> 3% <br></br>annually</h3>
      <button className='signup-btn'>
        <Link to='/signup'>
        Sign Up</Link>
      </button>
    </div>
  </div>
)

export default Home;