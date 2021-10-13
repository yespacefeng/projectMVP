import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Activities from './Activities.jsx';
import Settings from './Settings.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedin: true,
      userInfomation: {
        id: null,
        firstName: null,
        lastName: null,
        address: null,
        city: null,
        state: null,
        zip_code: null,
        savings: {},
        checking: {},
        transactions: []
      },
    };
  }

  componentDidMount() {
    this.getUserInformation(100000);
  }

  getUserInformation(id) {
    axios.get('/user', { params: { id: id } })
      .then(result => {
        this.setState({
          userInfomation: result.data
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  onLogInSubmit(event) {
    event.preventDefault();
  }

  onSignUpSubmit(event) {
    event.preventDefault();
  }

  onClick() {
    this.setState({loggedin: false})
  }

  render () {
    return (
      <Router>
        <div id='app'>
          <Header loggedin={this.state.loggedin} onClick={this.onClick.bind(this)}/>
          <div id='main'>
            <Switch>
              <Route exact path='/'>
                <Home
                  loggedin={this.state.loggedin}
                  user={this.state.userInfomation.firstName}
                  transactions={this.state.userInfomation.transactions}/>
              </Route>
              <Route exact path='/login'>
                <Login onSubmit={this.onLogInSubmit.bind(this)}/>
              </Route>
              <Route exact path='/signup'>
                <Signup onSubmit={this.onSignUpSubmit.bind(this)}/>
              </Route>
              <Route exact path='/activities'>
                <Activities userInfomation={this.state.userInfomation}
                />
              </Route>
              <Route exact path='/Settings'>
                <Settings userInfomation={this.state.userInfomation} />
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