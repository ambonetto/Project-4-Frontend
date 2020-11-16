// import React
import React, {Component} from 'react';

// import Shirt Type
import SelectColor from './Step4';

// class base
//   Step 4: Select Shirt Color -> black, white, pink, etc.
class Step4Container extends Component {
    constructor(props){
        super(props);
console.log(props)
        this.state = {
            design: props.design,
            selectFile: props.selectFile,
            image: props.image,
            allTypes: props.allTypes,
            isChecked: false,
            type: props.type,
            color: null
        }
    }

    // handle check function
    handleCheck = (e) => {
        this.setState({
            isChecked: e.target.value
        })
    }

    // handle type function
    handleType = (e) => {
        // prevents page refresh
        e.preventDefault();
        if (this.state.isChecked === "Black") {
            // setting the state of color to Black
            this.setState({
                color: "Long Sleeve"
            })

        } else if (this.state.isChecked === "White") {
            // setting the state of color to white
            this.setState({
                color: "White"
            })
        } else {
            // seeting the state of type to lemonchiffon
            this.setState({
                type: "Lemonchiffon"
            })
        }
        
        // setting the state to found to know an option was selected
        this.setState({
            location: "found"
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Place a Order</h1>
                <h2>Step 3: Shirt Color</h2> 
                <h3>Select a Color</h3>
                <SelectColor
                    allTypes={this.state.allTypes}
                    isChecked={this.state.isChecked}
                    handleType={this.handleType}
                    handleCheck={this.handleCheck}
                    design={this.state.design}
                    image={this.state.image}
                    selectFile={this.state.selectFile}
                    type={this.state.type}
                />
            </div>
        )
    }
}

// export Step 4 Container
export default Step4Container;