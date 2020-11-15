// import React
import React, {Component} from 'react';

// import Shirt Type
import SelectType from './Step3';

// class base
//   Step 3: Select Shirt Type -> long sleeve, short sleeve, etc.
class Step3Container extends Component {
    constructor(props){
        super(props);
    console.log(props)
        this.state = {
            design: props.design,
            selectFile: props.selectFile,
            image: props.image,
            allTypes: props.allTypes,
            isChecked: false,
            selectedType: null
        }
    }

    // handle check function
    handleCheck = (e) => {
        console.log(e.target.value)
        console.log(e.currentTarget.value)
        this.setState({
            isChecked: e.target.value
        })
    } 

    // handle type function
    handleType = (e) => {
        // prevents page refresh
        e.preventDefault();
        console.log(e.currentTarget.value)
        console.log(e.target.value)
        console.log("I am here!!!!")
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <h1>Place Order</h1>
                <h2>Step 2: Shirt Type</h2> 
                <h3>Select a Type of Shirt</h3>
                <SelectType 
                    allTypes={this.state.allTypes}
                    isChecked={this.state.isChecked}
                    handleType={this.handleType}
                />
            </div>
        )
    }
}

// export Step 3 Container
export default Step3Container;