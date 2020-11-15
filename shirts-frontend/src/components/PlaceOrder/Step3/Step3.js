// import React
import React from 'react';

// function base
//  Step 3: Select Shirt Type
const SelectType = (props) => {
    console.log("I am so here!")
    console.log(props)
    return(
        <div>
            <form onSubmit={(e) => props.handleType(e)}>
                <input type="Submit" value="Submit" />
                {props.allTypes.map((shirtType, index) => {
                    return <div key={index}>
                        <label>
                            <input 
                                type="radio"
                                checked={props.checked}
                                value={index}
                                onChange={props.handleCheck}
                            />
                            {shirtType.type}
                        </label>
                        <img className="image" src={shirtType.image} alt={shirtType.type}/>
                    </div>
                })} 
           </form>
        </div>
    )
}

// export design
export default SelectType;