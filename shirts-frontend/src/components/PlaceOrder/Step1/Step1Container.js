// import React 
import React, {Component} from 'react';

// import Step 1
import Step1 from './Step1';

// import Step 2 Container
import Step2Container from '../Step2/Step2Container';

// import helper for backend
import {allDesignOptions} from '../../../services/api_helper';

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

        console.log(props)

        this.state = {
            isChecked: false,
            location: null,
            allDesigns: null
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
            // setting the state of design to upload
            this.setState({
                design: "upload"
            })

        } else {
            // setting the state of design to select a design
            this.setState({
                design: "select"
            })
        }
        
        // setting the state to found to know an option was selected
        this.setState({
            location: "found"
        })
    }

    // check for all designs when the page is first rendered
    componentDidMount() {
        this.handleAllDesigns();
    }

    // handle All Designs function
    handleAllDesigns = async () => {
        const allDesigns = await allDesignOptions();

        console.log(allDesigns.data)

        this.setState({
            allDesigns: allDesigns.data
        })

        console.log(allDesigns)
    }
 
    render() {
        return(
            <div className="container">
                <h1>Place a Order</h1>
                {!this.state.location ?
                    <Step1 
                        isChecked={this.state.isChecked}
                        handleCheck={this.handleCheck}
                        handleLocation={this.handleLocation}
                        allDesigns={this.state.allDesigns}
                        location={this.state.location}
                    />
                :
                    <Step2Container 
                        isChecked={this.state.isChecked}
                        location={this.state.location}
                        design={this.state.design}
                        allDesigns={this.state.allDesigns}
                    />                    
                }  
            </div>
        )
    }
}

// export Shirts Container
export default Step1Container;