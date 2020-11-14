// import React 
import React, {Component} from 'react';

// import Step 1
import Step1 from './Step1';

// import Step 2
import Step2Container from '../Step2/Step2Container';

// import Route
import {Route} from 'react-router-dom';

// class base
//    Step 1: Design -> choose from an already made design or upload your own
class Step1Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: false,
            location: null,
            design: null
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
                    <Route path="/placeorder" render={(props) =>{
                        return <Step2Container 
                            design={this.state.design}
                    />
                    }} /> 
                }
            </div>
        )
    }
}

// export Shirts Container
export default Step1Container;