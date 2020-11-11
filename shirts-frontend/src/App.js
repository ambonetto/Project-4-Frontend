import './App.css';

// import React
import React, {Component} from 'react';

// import Signup Form
import SignupForm from './components/SignupForm'

// import Route and Link
import {Route, Link, withRouter} from 'react-router-dom'

// import helper for backend
import {signupUser} from './services/api_helper'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  // handle signup function
  handleSignup = async (e, signupData) => {
    // prevents page refresh
    e.preventDefault();
    const currentUser = await signupUser(signupData);

    this.setState({
      currentUser
    })

    // redirects 
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <Link to="/signup">Signup!</Link>
        <Route path="/signup" render={() => {
          return <SignupForm handleSignup={this.handleSignup} />
        }} />
      </div>
    );
  }
}


export default withRouter(App);
