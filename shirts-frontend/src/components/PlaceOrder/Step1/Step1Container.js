// import React 
import React, {Component} from 'react';

// import Step 1
import Step1 from './Step1';

// import Step 2 Container
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

        console.log(props)

        this.state = {
            isChecked: false,
            step1: false,
            allDesigns: props.allDesigns,
            allTypes: props.allTypes,
            selectFile: props.selectFile,
            allColors: props.allColors
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
        
        // setting step1 to true to move to the next step was selected
        this.setState({
            step1: true
        })
    }
 
    render() {
        return(
            <div className="container">
                <h1>Place Order</h1>
                {this.state.step1 === false ?
                    <Step1 
                        allTypes={this.state.allTypes}
                        allDesigns={this.state.allDesigns}
                        allColors={this.state.allColors}
                        design={this.state.design}
                        image={this.state.image}
                        selectFile={this.state.selectFile}
                        type={this.state.type}
                        isChecked={this.state.isChecked}
                        handleCheck={this.handleCheck}
                        handleLocation={this.handleLocation}
                    />
                :
                    <Step2Container 
                        allTypes={this.state.allTypes}
                        allDesigns={this.state.allDesigns}
                        allColors={this.state.allColors}
                        design={this.state.design}
                        image={this.state.image}
                        selectFile={this.state.selectFile}
                        type={this.state.type}
                        isChecked={this.state.isChecked}
                    />                    
                }  
            </div>
        )
    }
}

// export Shirts Container
export default Step1Container;