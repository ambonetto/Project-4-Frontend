// import React
import React from 'react';

// import Link 
import {Link} from 'react-router-dom';

//  Step 2: Select Design
const SelectedDesign = (props) => {
    return(
        <div className="placeOrder">
            <h2>Step 1: Design</h2>
            <h1>Select from a design</h1>
            <form onSubmit={(e) => props.handleSelect(e)}>
                <Link to="/placeorder/step2">Submit</Link>
           
                {props.allDesigns.map((design, index) => {
                    return <div key={index}>
                        <label>
                            <input
                                type="radio"
                                checked={props.checked}
                                value={index}
                                onChange={props.handleCheck}
                            />
                            {design.name}
                        </label>
                        <div>
                            <img className="image" src={design.image} />
                        </div>
                    </div>
                })}
            </form>
        </div>
    )
}

// export design
export default SelectedDesign;