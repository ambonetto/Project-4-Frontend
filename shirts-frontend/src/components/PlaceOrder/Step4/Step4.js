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
        </div>
    )
}

// export color
export default SelectColor;