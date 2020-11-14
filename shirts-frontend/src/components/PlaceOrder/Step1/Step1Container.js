// import React 
import React, {Component} from 'react';

// import Step 1
import Step1 from './Step1';

// import Step 2
import Step2Container from '../Step2/Step2Container';

// class base
//  placing order based on what is selected
//      Step 1: Design -> choose from an already made design or upload your own
//      Step 2: Select Design/Upload Design
//      Step 3: Select Shirt Type -> long sleeve, short sleeve, etc.
//      Step 4: Select Shirt Color -> black, white, pink, etc.
//      Step 5: Select Shirt Sizes and Quantity -> Medium, 15
//      Step 6: Review Order and Place Order
class Step1Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: false,
            location: null
        }
    }

    // handle check function
    handleCheck = (e) => {
        this.setState({
            isChecked: e.target.value
        })
    }

    // handle location function
    handleLocation = (e) => {
        // prevents page refresh
        e.preventDefault();
        if (this.state.isChecked === "Upload") {
            this.props.history.push('/placeorder/upload');
        } else {
            this.props.history.push('/placeorder/designs')
        }
        
        this.setState({
            location: "found"
        })
    }
 
    render() {
        return(
            <div className="container">
                <h1>Place an Order</h1>
                {!this.state.location ?
                    <Step1 
                        isChecked={this.state.isChecked}
                        handleCheck={this.handleCheck}
                        handleLocation={this.handleLocation}
                    />
                :
                    <Step2Container /> 
                }
                
            </div>
        )
    }
}

// export Shirts Container
export default Step1Container;