// import React
import React from 'react';

// import Link 
import {Link} from 'react-router-dom';

//  Step 4: Select Shirt Color -> black, white, pink, etc.
const SelectColor = (props) => {
    console.log("I am so here!")
    console.log(props)
    return(
        <div className="type">
           <h1>Colors!</h1>
           <form onSubmit={(e) => props.handleType(e)}>
                <Link to="/placeorder/step4">Submit</Link>
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