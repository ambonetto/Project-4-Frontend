// import React
import React from 'react';

//  Step 2: Select Design
const SelectedDesign = (props) => {
    console.log("I am so here!")
    console.log(props)
    return(
        <div>
            <h2>Step 1: Design</h2>
            {props.allDesigns.map((design, index) => {
                return <div key={index}>
                    <li>{design.name}</li>
                    <img className="image" src={design.image} />
                    </div>
            })}
        </div>
    )
}

// export design
export default SelectedDesign;