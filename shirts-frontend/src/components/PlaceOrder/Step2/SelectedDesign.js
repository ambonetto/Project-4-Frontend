// import React
import React from 'react';

const SelectedDesign = (props) => {
    console.log("I am so here!")
    console.log(props)
    return(
        <div>
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