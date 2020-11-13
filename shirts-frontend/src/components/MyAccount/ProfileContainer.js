// import React
import React, {Component} from 'react';

// import Profile
import Profile from './Profile';

// import helper for backend
import {putProfile, destroyProfile} from '../../services/api_helper';

// import withRouter
import {withRouter} from 'react-router-dom';

// class base
//  updating and deleting a profile
class ProfileContainer extends Component {
    constructor(props) {
        super(props);
    }

    // update profile function
    updateProfile = async (e, userId, profileData) => {
        // prevent page refresh
        e.preventDefault();
        const updateProfile = await putProfile(userId, profileData);
        
        const currentUser = updateProfile

        this.setState({
            currentUser
        })
    }

    // delete profile function
    deleteProfile = async(userId, profileData) => {
        await destroyProfile(userId, profileData)

        const currentUser = this.props.currentUser

        this.setState({
            currentUser: ""
        })

        // redirects to homepage
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
            <h1>My Account</h1>
            <Profile 
                currentUser={this.props.currentUser}
                updateProfile={this.updateProfile}
                userId={this.props.currentUser.id}
                deleteProfile={this.deleteProfile}
            />
        </div>
        )
    }
}

// export My Account Container
export default withRouter (ProfileContainer);