import React from 'react';

const WelcomeBack = ({ user, transactions }) => (
  <div id='welcome-container'>
    <h2>Welcome back, {user}</h2>
    <h3>Recent Transaction</h3>
    {transactions[0] ?
    <div id='recent-transaction'>
      <h4 className='description'>{transactions[0].description}</h4>
      {transactions[0].withdraw ? <h4 className='amount'>- ${(Math.round(transactions[0].amount * 100) / 100).toFixed(2)}</h4> : <h4 className='amount'>+ ${(Math.round(transactions[0].amount * 100) / 100).toFixed(2)}</h4>}
    </div> : null}
    <p>It may be entry #112 in the Pokédex, but according to Ken Sugimori – the primary designer for the Pokémon games – Rhydon was the first Pokémon ever created. This is also the reason why sprites of Rhydon were so widespread in the original games. In that same interview, Sugimori mentions Lapras and Clefairy as some of the other earliest Pokémon designs to join Rhydon.</p>
  </div>
)

export default WelcomeBack;