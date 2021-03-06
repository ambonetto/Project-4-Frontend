// import React 
import React from 'react';

// function base
//  Step 1: Choose from designs or upload design
const Step1 = (props) => {
    return(
        <div className="placeOrder">
            <h2>Step 1: Design</h2>
            <form onSubmit={(e) => props.handleLocation(e)}>
                <label>
                    <input 
                        type="radio"
                        checked={props.checked}
                        value="Upload"
                        onChange={props.handleCheck}
                    />
                    Upload my design
                </label>
                <br />
                <label>
                    <input 
                        type="radio"
                        checked={props.checked}
                        value="Select"
                        onChange={props.handleCheck}
                    />
                    Select from designs
                </label>
                <br />
                <input type="Submit" value="Submit" />
            </form> 
        </div>
    )
}

// export Step 1
export default Step1;