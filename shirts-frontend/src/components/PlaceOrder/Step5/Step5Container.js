// import React
import React, {Component} from 'react';

// import Select Size
import SelectSize from './Step5';

// class base
//   Step 5: Select Shirt Sizes and Quantity -> Medium, 15
class Step5Container extends Component {
    constructor(props) {
        super(props)
        
        console.log(props)
    }

    
    render() {
        return ( 
            <div className="container">
                <h1>Place a Order</h1>
                <SelectSize 
                />
            </div>
        )
    }
}

// export Step 5 container
export default Step5Container;