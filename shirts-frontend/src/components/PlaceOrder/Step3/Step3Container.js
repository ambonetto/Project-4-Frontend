// import React
import React, {Component} from 'react';

// import helper for backend
import {allShirtTypeOptions} from '../../../services/api_helper';

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
            allTypes: props.allTypes
        }
    }

    render() {
        return (
            <div className="container">
                <h1>Place a Order</h1>
                <h2>Step 2: Shirt Type</h2> 
                <h3>Select a Type of Shirt</h3>
                <SelectType 
                    allTypes={this.state.allTypes}
                />
            </div>
        )
    }
}

// export Step 3 Container
export default Step3Container;