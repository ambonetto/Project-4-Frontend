import './App.css';

// import React
import React, {Component} from 'react';

// import Route and Link
import {Route, Link, withRouter, Switch} from 'react-router-dom';

// import helper for backend
import {signupUser, loginUser, verifyUser, allShirtTypeOptions} from './services/api_helper';

// import Signup Form
import SignupForm from './components/SignupForm';

// import Login Form
import LoginForm from './components/LoginForm';

// import Homepage
import Homepage from './components/Homepage/Homepage';

// import Profile Container
import ProfileContainer from './components/MyAccount/ProfileContainer';

// import About Design Container
import AboutDesignContainer from './components/AboutDesigner/AboutDesignerContainer';

// import Step 1 Container
import Step1Container from './components/PlaceOrder/Step1/Step1Container';

// import Step 3 Container
import Step3Container from './components/PlaceOrder/Step3/Step3Container';

// import Step 4 Container
import Step4Container from './components/PlaceOrder/Step4/Step4Container';

// import Footer
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      allTypes: null,
      design: null, 
      image: null, 
      selectFile: null
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
    this.handleAllShirtTypes();
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

  // handle All Shirt Types function
  handleAllShirtTypes = async () => {
    const allTypes = await allShirtTypeOptions();
    
    console.log(allTypes.data)
    
    this.setState({
        allTypes: allTypes.data
    })
    
    console.log(allTypes)
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
                <Link to="/aboutdesigner">About Designer</Link>
              </div>
            :
              <div>
                <Link to="/placeorder/step1">Place Order</Link>
                <Link to={`/profile/${this.state.currentUser.id}`}>My Account</Link>
                <a onClick={this.handleLogout} className="logout">Logout</a>
                <Link to="/aboutdesigner">About Designer</Link>
              </div>
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
          <Route exact path="/profile/:id" render={(props) => {
            return <ProfileContainer
              currentUser={this.state.currentUser}
              userId={this.state.currentUser.id}
            />
          }} />
          <Route path="/aboutdesigner" render={() => {
            return <AboutDesignContainer />
          }} />
          <Route path="/placeorder/step1" render={() => {
            return <Step1Container 
              design={this.state.design}
              image={this.state.image}
              selectFile={this.state.selectFile}
            />
          }} />
          <Route path="/placeorder/step2" render={() => {
            return <Step3Container 
              allTypes={this.state.allTypes}
              design={this.state.design}
              image={this.state.image}
              selectFile={this.state.selectFile}
            />
          }} />
          <Route path="/placeorder/step3" render={() => {
            return <Step4Container 
              allTypes={this.state.allTypes}
              design={this.state.design}
              image={this.state.image}
              selectFile={this.state.selectFile}
            />
          }} />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default withRouter(App);
