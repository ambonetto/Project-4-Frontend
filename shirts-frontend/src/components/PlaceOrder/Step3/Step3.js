// import React
import React from 'react';

// import Link 
import {Link} from 'react-router-dom';

// function base
//  Step 3: Select Shirt Type -> long sleeve, short sleeve, etc.
const SelectType = (props) => {
    return(
        <div className="placeOrder">
            <h2>Step 2: Shirt Type</h2> 
            <h3>Select a Type of Shirt</h3>
            <form onSubmit={(e) => props.handleType(e)}>
                <Link to="/placeorder/step3">Submit</Link>
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
                        <div>
                            <img className="image" src={shirtType.image} alt={shirtType.type}/>
                        </div>
                    </div>
                })} 
           </form> 
        </div>
    )
}

// export type
export default SelectType;