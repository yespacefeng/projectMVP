import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedin: false,
      transactions: []
    };
  }

  onLogInSubmit(event) {
    event.preventDefault();

  }

  onSignUpSubmit(event) {
    event.preventDefault();
  }

  render () {
    return (
      <Router>
        <div id='app'>
          <Header loggedin={this.state.loggedin}/>
          <div id='main'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/login'>
                <Login onSubmit={this.state.onLogInSubmit.bind(this)}/>
              </Route>
              <Route exact path='/signup'>
                <Signup onSubmit={this.state.onSignUpSubmit.bind(this)}/>
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))