// import React
import React, {Component} from 'react';

// import Select Size
import SelectSize from './Step5';

// class base
//   Step 5: Select Shirt Sizes and Quantity -> Medium, 15
class Step5Container extends Component {
    constructor(props) {
        super(props)

        this.state = {
            design: props.design,
            selectFile: props.selectFile,
            image: props.image,
            allTypes: props.allTypes,
            allDesigns: props.allDesigns,
            allColors: props.allColors,
            isChecked: false,
            type: props.type,
            color: props.color,
            size: null,
            quantity: null
        }
    }

    // handle check function
    handleCheck = (e) => {
        this.setState({
            isChecked: e.target.value,
            size: e.target.value,
            // quantity: e.target.value
        })
    }

    // handle type function
    handleType = (e) => {
        // prevents page refresh
        e.preventDefault();

        this.setState({
            size: this.state.isChecked
        })
    }

    
    render() {
        return ( 
            <div className="container">
                <h1>Place a Order</h1>
                <SelectSize
                    allTypes={this.state.allTypes}
                    allDesigns={this.state.allDesigns}
                    allColors={this.state.allColors}
                    design={this.state.design}
                    image={this.state.image}
                    selectFile={this.state.selectFile}
                    type={this.state.type}
                    isChecked={this.state.isChecked}
                    color={this.state.color}
                    size={this.state.size}
                    quantity={this.state.quantity}
                    handleType={this.handleType}
                    handleCheck={this.handleCheck}
                    {...this.state}
                />
            </div>
        )
    }
}

// export Step 5 container
export default Step5Container;