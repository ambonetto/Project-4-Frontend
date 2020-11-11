// import React
import React from 'react';

// import Profile
import Profile from './Profile';

// function base
const ProfileContainer = (props) => {
    return (
        <div className="profileContainer">
            <h1>My Account</h1>
            <Profile />
        </div>
    )
}

// export My Account Container
export default ProfileContainer;