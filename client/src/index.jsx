import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [user, setUser] = useState('Ye Feng');

  return (
    <div id='main'>
      <h1>Hello {user}</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'))