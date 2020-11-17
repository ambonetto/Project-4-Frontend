// import React
import React from 'react';

// import React slideshow
import {Slide} from 'react-slideshow-image';

// Images for slideshow
const slideImages = [
    "https://raw.githubusercontent.com/ambonetto/Project-4-Frontend/master/Images/Fall.jpg?_sm_au_=iVVzMk7320SWq3tQL321jK0f1JH33",
    "https://raw.githubusercontent.com/ambonetto/Project-4-Frontend/master/Images/Party.jpg?_sm_au_=iVVzMk7320SWq3tQL321jK0f1JH33",
    "https://raw.githubusercontent.com/ambonetto/Project-4-Frontend/master/Images/Dinosaur.jpg?_sm_au_=iVVzMk7320SWq3tQL321jK0f1JH33",
]

// function base
const Homepage = (props) => {
    return(
        <div className="container">
            <h1>Welcome to JB Designs!</h1>
            <h2>Screen Printing and more</h2>
            <div className="slideWrapper">
                <h1>Recent Designs</h1>
                <div className="slideContainer">
                    <Slide>
                        <div className="slide">
                            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                            </div>
                        </div>
                        <div className="slide">
                            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                            </div>
                        </div>
                        <div className="slide">
                            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    )
}

// export Homepage
export default Homepage;