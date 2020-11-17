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
            allDesigns: props.allDesigns,
            isChecked: false,
            type: props.type
        }
    }

    // handle check function
    handleCheck = (e) => {
        console.log(e.target.value)

        this.setState({
            isChecked: e.target.value,
            type: e.target.value
        })
    } 

    // handle type function
    handleType = (e) => {
        // prevents page refresh
        e.preventDefault();
 
        this.setState({
            type: this.state.isChecked
        })
        console.log(this.state.type)
        console.log("HELllllloooo!")
    }

    render() {
        return (
            <div className="container">
                <h1>Place Order</h1>
                <SelectType 
                    allTypes={this.state.allTypes}
                    allDesigns={this.state.allDesigns}
                    design={this.state.design}
                    image={this.state.image}
                    selectFile={this.state.selectFile}
                    type={this.state.type}
                    isChecked={this.state.isChecked}
                    handleType={this.handleType}
                    handleCheck={this.handleCheck}
                />
            </div>
        )
    }
}

// export Step 3 Container
export default Step3Container;