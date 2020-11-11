// import React
import React from 'react';

// import font awesome icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// import instagram
import {faInstagram} from "@fortawesome/free-brands-svg-icons";

// function base
const Footer = () => {
    return (
        <div className='Footer'>
            <a className='issue' href='https://github.com/ambonetto/Project-4-Frontend/issues' target='_blank'>Report an Issue</a>
            <div className="socialContainer">
                <a href="https://www.instagram.com/531design/" target='_blank'
                    className="instagram">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
            <footer className='authors'>&copy; A. Bonetto</footer>
        </div>
    )
}

// export Footer
export default Footer;