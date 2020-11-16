// import React
import React, {Component} from 'react';

// class base
//      signup form
class SignupForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "", 
            username: "", 
            password: "",
            email: "",
            admin: true
        }
    }

    // handle change function
    handleChange = (e) => {
        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div className="signupWrapper">
                <h1>Welcome!</h1>
                <h3>Please Sign Up</h3>
                <form onSubmit={(e) => this.props.handleSignup(e, this.state)}>
                    <div className="signupContainer">
                        <label className="label">Name: </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
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
                        <label className="label">Email: </label>
                        <input 
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <br />
                        <input className="submit" type="submit" value="Signup" />
                    </div>
                </form>
            </div>
        )
    }
}

// export Signup Form
export default SignupForm;