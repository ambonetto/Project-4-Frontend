import './App.css';

// import React
import React, {Component} from 'react';

// import Route and Link
import {Route, Link, withRouter, Switch} from 'react-router-dom';

// import helper for backend
import {signupUser, loginUser, verifyUser} from './services/api_helper';

// import Signup Form
import SignupForm from './components/SignupForm';

// import Login Form
import LoginForm from './components/LoginForm';

// import Homepage
import Homepage from './components/Homepage/Homepage';

// import Footer
import Footer from './components/Footer';

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

  // handle logout function
  handleLogout = () => {
    localStorage.removeItem('authToken');
    this.setState({
      currentUser: null
    })

    // redirects to the login page
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link className="title" to="/">JB Designs</Link>
          <nav>
            {!this.state.currentUser ?
              <div>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
              </div>
            :
              <a onClick={this.handleLogout} className="logout">Logout</a>
            }
          </nav>
        </header>
        <Switch>
          <Route path="/signup" render={() => {
            return <SignupForm handleSignup={this.handleSignup} />
          }} />
          <Route path="/login" render={() => {
            return <LoginForm handleLogin = {this.handleLogin} />
          }} />
          <Route exact path="/" render={() => {
            return <Homepage />
          }} />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default withRouter(App);
