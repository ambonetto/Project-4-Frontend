// import React 
import React, {Component} from 'react';

class ShirtsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <h1>Place an Order</h1>
                <h2>Step 1: Design</h2>
                <option>Upload my design</option>
                <option>Choose from designs</option>
            </div>
        )
    }
}

// export Shirts Container
export default ShirtsContainer;