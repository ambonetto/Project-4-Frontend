// import React
import React, {Component} from 'react';

// class base
//  displaying profile
class Profile extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: this.props.currentUser.name,
            email: this.props.currentUser.email,
            username: this.props.currentUser.username
        }
    }

    componentDidMount() {
        const userShow = this.props.currentUser;

        this.setState({
            name: userShow.name,
            email: userShow.email,
            username: userShow.username
        })
    }

    // handle change function
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="myAccountContainer">
                <div className="myAccountWrapper">
                    <form onSubmit={(e) => this.props.updateProfile(e, this.props.userId, this.state)}>
                        <label className="label">Name: </label>
                        <input 
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder={this.state.name}
                            onChange={this.handleChange}
                        />
                        <br />
                        <label className="label">Email: </label>
                        <input 
                            type="text"
                            name="email"
                            value={this.state.email}
                            placeholder={this.state.email}
                            onChange={this.handleChange}
                        />
                        <br />
                        <label className="label">Username: </label>
                        <input 
                            type="text"
                            name="username"
                            value={this.state.username}
                            placeholder={this.state.username}
                            onChange={this.handleChange}
                        />
                        <br />
                        <input className="submit" type="submit" value="Update Profile" />
                        <br />
                        <input onClick={() => this.props.deleteProfile(this.props.userId)} 
                            className="delete"
                            type="submit"
                            value="Delete Profile" 
                            />
                    </form>
                </div>
            </div>
        )
    }
}

// export Profile
export default Profile;