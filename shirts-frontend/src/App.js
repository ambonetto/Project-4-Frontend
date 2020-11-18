import './App.css';

// import React
import React, {Component} from 'react';

// import Route and Link
import {Route, Link, withRouter, Switch} from 'react-router-dom';

// import helper for backend
import {signupUser, loginUser, verifyUser, allDesignOptions, allShirtTypeOptions, allColorOptions, newDesignPost} from './services/api_helper';

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

// import Design Container
import DesignContainer from './components/Design/DesignContainer';

// import Create Design
import CreateDesign from './components/Design/CreateDesign';

// import Step 1 Container
import Step1Container from './components/PlaceOrder/Step1/Step1Container';

// import Step 3 Container
import Step3Container from './components/PlaceOrder/Step3/Step3Container';

// import Step 4 Container
import Step4Container from './components/PlaceOrder/Step4/Step4Container';

// import Step 5 Container
import Step5Container from './components/PlaceOrder/Step5/Step5Container';

// import Step 6 Container
import Step6Container from './components/PlaceOrder/Step6/Step6Container';

// import Footer
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      designs: null
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
    this.handleAllDesigns();
    this.handleAllColors();
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

    this.setState({
        allTypes: allTypes.data
    })
  }

  // handle All Designs function
  handleAllDesigns = async () => {
    const allDesigns = await allDesignOptions();

    this.setState({
      allDesigns: allDesigns.data
    })
  }

  // handle All Colors function
  handleAllColors = async () => {
    const allColors = await allColorOptions();

    this.setState({
      allColors: allColors.data
    })
  }

  // create Design
  createDesign = async (e, designData) => {
    // prevent page refresh
    e.preventDefault();
    const newDesign = await newDesignPost(designData);

    const designs = this.state.designs;

    this.setState({
      designs: newDesign
    })
        
    // redirects back to all designs 
    this.props.history.push("/designs");
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
                <Link to="/designs">Designs</Link>
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
          <Route exact path="/designs" render={() => {
            return <DesignContainer 
              allDesigns={this.state.allDesigns}
              currentUser={this.state.currentUser}
            />
          }} /> 
          <Route path="/designs/new" render={() => {
              return <CreateDesign 
              createDesign={this.createDesign}
              deleteDesign={this.deleteDesign}
            />
          }} />
          <Route path="/placeorder/step1" render={() => {
            return <Step1Container 
              allTypes={this.state.allTypes}
              allDesigns={this.state.allDesigns}
              allColors={this.state.allColors}
              design={this.state.design}
              image={this.state.image}
              selectFile={this.state.selectFile}
            />
          }} />
          <Route path="/placeorder/step2" render={() => {
            return <Step3Container 
              allTypes={this.state.allTypes}
              allDesigns={this.state.allDesigns}
              allColors={this.state.allColors}
              design={this.state.design}
              image={this.state.image}
              selectFile={this.state.selectFile}
              type={this.state.type}
              {...this.state}
            />
          }} />
          <Route path="/placeorder/step3" render={() => {
            return <Step4Container 
              allTypes={this.state.allTypes}
              allDesigns={this.state.allDesigns}
              allColors={this.state.allColors}
              design={this.state.design}
              image={this.state.image}
              selectFile={this.state.selectFile}
              type={this.state.type}
              isChecked={this.state.isChecked}
              color={this.state.color}
              handleType={this.handleType}
              handleCheck={this.handleCheck}
              {...this.state}
            />
          }} />
          <Route path="/placeorder/step4" render={() => {
            return <Step5Container 
              allTypes={this.state.allTypes}
              allDesigns={this.state.allDesigns}
              allColors={this.state.allColors}
              design={this.state.design}
              image={this.state.image}
              selectFile={this.state.selectFile}
              type={this.state.type}
              isChecked={this.state.isChecked}
              color={this.state.color}
              size={this.state.size}
              quantity={this.state.quantity}
              handleType={this.handleType}
              handleCheck={this.handleCheck}
              {...this.state}
            />
          }} />
          <Route path="/placeorder/step5" render={() => {
            return <Step6Container
              allTypes={this.state.allTypes}
              allDesigns={this.state.allDesigns}
              allColors={this.state.allColors}
              design={this.state.design}
              image={this.state.image}
              selectFile={this.state.selectFile}
              type={this.state.type}
              isChecked={this.state.isChecked}
              color={this.state.color}
              size={this.state.size}
              quantity={this.state.quantity}
              handleType={this.handleType}
              handleCheck={this.handleCheck}
              {...this.state}              
            />
          }} />
        </Switch>
        <Footer />
      </div>
    );
  }
}


export default withRouter(App);