// import React
import React from 'react';

// import React slideshow
import {Slide} from 'react-slideshow-image';

// Images for slideshow
const slideImages = [
    "https://github.com/ambonetto/Project-4-Frontend/blob/master/Images/Fall.png",
    "https://github.com/ambonetto/Project-4-Frontend/blob/master/Images/Party.png",
    "https://github.com/ambonetto/Project-4-Frontend/blob/master/Images/Dinosaur.png",
]

// function base
const Homepage = (props) => {
    return(
        <div className="slideWrapper">
            <h1>Recent Designs</h1>
            <div className="slideContainer">
                <Slide>
                    <div className="slide">
                        <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                        <span>Slide 1</span>
                        </div>
                    </div>
                    <div className="slide">
                        <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                        <span>Slide 2</span>
                        </div>
                    </div>
                    <div className="slide">
                        <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                        <span>Slide 3</span>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

// export Homepage
export default Homepage;