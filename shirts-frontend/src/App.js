import './App.css';

// import React
import React, {Component} from 'react';

// import Route and Link
import {Route, Link, withRouter} from 'react-router-dom';

// import helper for backend
import {signupUser, loginUser, verifyUser} from './services/api_helper';

// import Signup Form
import SignupForm from './components/SignupForm';

// import Login Form
import LoginForm from './components/LoginForm';

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

  // handle login function
  handleLogin = async (e, loginData) => {
    // prevents page refresh
    e.preventDefault();
    const currentUser = await loginUser(loginData);

    this.setState({
      currentUser
    })

    // redirects
    this.props.history.push('/');
  }

  // handle verify function
  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({
        currentUser
      })
      
      // redirects
      this.props.history.push('/')
    } 
  }

  // check if logged in when the page is first rendered
  componentDidMount() {
    this.handleVerify();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <Link to="/signup">Signup!</Link>
        <Link to="/login">Login!</Link>
        <Route path="/signup" render={() => {
          return <SignupForm handleSignup={this.handleSignup} />
        }} />
        <Route path="/login" render={() => {
          return <LoginForm handleLogin = {this.handleLogin} />
        }} />
      </div>
    );
  }
}


export default withRouter(App);
