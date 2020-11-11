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
            email: ""
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
            <form onSubmit={(e) => this.props.handleSignup(e, this.state)}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
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
                <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Signup" />
            </form>
        )
    }
}

// export Signup Form
export default SignupForm;