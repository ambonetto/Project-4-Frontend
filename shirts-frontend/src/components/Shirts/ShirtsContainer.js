// import React 
import React, {Component} from 'react';

// import Step 1
import Step1 from './Step1';

// import Link
import {Route, Link, withRouter} from 'react-router-dom';

// import upload design
import UploadDesign from './UploadDesign';

// class base
//  placing order based on what is selected
//      Step 1: Design -> choose from an already made design or upload your own
//      Step 2: Select Design/Upload Design
//      Step 3: Select Shirt Type -> long sleeve, short sleeve, etc.
//      Step 4: Select Shirt Color -> black, white, pink, etc.
//      Step 5: Select Shirt Sizes and Quantity -> Medium, 15
//      Step 6: Review Order and Place Order
class ShirtsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            designs: [
                {id: 1, value: "Choose from designs", isChecked: false},
                {id: 2, value: "Upload my design", isChecked: false}
            ]
        }
    }

    // handle check function
    handleCheck = (e) => {
        let designs = this.state.designs
        designs.forEach(design => {
            if (design.value === e.target.value) {
                design.isChecked = e.target.checked
            }
        })

        console.log(designs)

        this.setState({
            designs: designs
        })
    }

    // handle location function
    handleLocation = (e) => {
        console.log("I am here")
        console.log(this.state.designs)
        e.preventDefault();
        if (this.state.designs.id === 1) {
            this.props.history.push('/placeorder/designs');
        } else {
            this.props.history.push('/placeorder/upload')
        }
    }
 
    render() {
        return(
            <div className="container">
                <Step1 
                    designs={this.state.designs}
                    handleCheck={this.handleCheck}
                    handleLocation={this.handleLocation}
                />
                <Route path="/placeorder/upload" render={() => {
                    return <UploadDesign />
                }} />
            </div>
        )
    }
}

// export Shirts Container
export default withRouter (ShirtsContainer);