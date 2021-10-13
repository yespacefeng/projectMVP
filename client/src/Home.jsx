import React from 'react';
import { Link } from 'react-router-dom';
import Spendings from './Spendings.jsx';
import WelcomeBack from './WelcomeBack.jsx';

const Home = ({ loggedin, user, transactions }) => (
  <div id='home-page'>
    {loggedin ? <WelcomeBack user={user} transactions={transactions}/> : null}
    {loggedin && transactions.length !== 0 ? <Spendings transactions={transactions}/> : null}
    {loggedin ? null : <div className='accounts'>
      <h4>Open a Checking Account Today</h4>
      <h3>Earn up to<br></br> $200 <br></br>when you open an account and refer friends</h3>
      <button className='signup-btn'>
        <Link to='/signup'>Sign Up
        </Link>
      </button>
    </div>}
    {loggedin ? null : <div className='accounts'>
      <h4>Open a Savings Account Today</h4>
      <h3>Earn<br></br> 3% <br></br>annually</h3>
      <button className='signup-btn'>
        <Link to='/signup'>
        Sign Up</Link>
      </button>
    </div>}
  </div>
)

export default Home;