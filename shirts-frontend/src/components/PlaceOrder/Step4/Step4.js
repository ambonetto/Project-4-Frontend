// import React
import React from 'react';

// import Link 
import {Link} from 'react-router-dom';

// function base
//  Step 4: Select Shirt Color -> black, white, pink, etc.
const SelectColor = (props) => {
    return(
        <div className="type">
            <h2>Step 3: Shirt Color</h2> 
            <h3>Select a Color</h3>
           <form onSubmit={(e) => props.handleType(e)}>
                <Link to="/placeorder/step4">Submit</Link>
                {props.allColors.map((colors, index) => {
                    return <div key={index}>
                        <label>
                            <input 
                                type="radio"
                                checked={props.checked}
                                value={index}
                                onChange={props.handleCheck}
                            />
                            {colors.color}
                        </label>
                    </div>
                })} 
            </form>
        </div>
    )
}

// export color
export default SelectColor;