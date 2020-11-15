// import React
import React from 'react';

//  Step 3: Select Shirt Type
const SelectType = (props) => {
    console.log("I am so here!")
    console.log(props)
    return(
        <div>
           {props.allTypes.map((shirtType, index) => {
               return <div key={index}> 
                <li>{shirtType.type}</li>
                </div>
           })}
        </div>
    )
}

// export design
export default SelectType;