// import React 
import React from 'react';

// import Check Box
import CheckBox from './CheckBox';

// class base
//  Step 1: Choose from designs or upload design
const Step1 = (props) => {
    console.log(props)
    return(
        <div className="container">
            <h1>Place an Order</h1>
            <h2>Step 1: Design</h2>
            <form onSubmit={(e) => this.handleLocation(e)}>
                {
                    props.designs.map((design, index) => {
                        return(
                            <CheckBox 
                                key={index} 
                                {...design} 
                                handleCheck={props.handleCheck}
                                handleLocation={props.handleLocation}
                            /> 
                        )
                    })
                }
                <input type="Submit" value="Submit" />
            </form> 
        </div>
    )
}

// export Step 1
export default Step1;