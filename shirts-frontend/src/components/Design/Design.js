// import React
import React from 'react';

// function base
//  displaying all designs
const Design = (props) => {
    return(
        <div className="container">
            {props.allDesigns.map((design, index) => {
                return <div key={index}>
                    <li>{design.name}</li>
                    <img className="image" src={design.image} alt={design.name} />
                </div>
            })}
        </div>
    )
}

// export Designs
export default Design;