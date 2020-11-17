// import React
import React, {Component} from 'react';

// class base
//      login form
class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        }
    }

    // handle change function
    handleChange = (e) => {
        const{name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div className="loginWrapper">
                <h1>Welcome Back!</h1>
                <h3>Please Login</h3>
                <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
                    <div className="loginContainer">
                        <label className="label">Username: </label>
                        <input 
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <label className="label">Password: </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <input className="submit" type="submit" value="Login" />
                    </div>
                </form>
            </div>
        )   
    }
}

// export Login Form
export default LoginForm;