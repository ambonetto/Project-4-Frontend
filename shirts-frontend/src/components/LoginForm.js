// import React
import React, {Component} from 'react';

// class base
//      login form
class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            passwor: ""
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
                <form onSubmit={(e) => this.props.handleLogin(e, this.state)}>
                    <div className="loginContainer">
                        <input 
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        )   
    }
}

// export Login Form
export default LoginForm;