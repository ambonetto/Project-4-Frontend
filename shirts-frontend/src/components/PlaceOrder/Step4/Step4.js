// import React
import React from 'react';

// import Link 
import {Link} from 'react-router-dom';

// function base
//  Step 4: Select Shirt Color -> black, white, pink, etc.
const SelectColor = (props) => {
    console.log("I am so here!")
    console.log(props)
    return(
        <div className="type">
            <h2>Step 3: Shirt Color</h2> 
            <h3>Select a Color</h3>
           <form onSubmit={(e) => props.handleType(e)}>
                <Link to="/placeorder/step4">Submit</Link>
                <br />
                <label>
                    <input 
                        type="radio"
                        checked={props.checked}
                        value="Black"
                        onChange={props.handleCheck}
                    />
                    Black
                </label>
                <br />
                <label>
                    <input 
                        type="radio"
                        checked={props.checked}
                        value="White"
                        onChange={props.handleCheck}
                    />
                    White
                </label>
                <br />
                <label>
                    <input 
                        type="radio"
                        checked={props.checked}
                        value="Lemonchiffon"
                        onChange={props.handleCheck}
                    />
                    Lemonchiffon
                </label>
            </form>
        </div>
    )
}

// export color
export default SelectColor;