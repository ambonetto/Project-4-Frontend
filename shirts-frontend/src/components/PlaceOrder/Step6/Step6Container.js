// import React
import React, {Component} from 'react';

// import Place Order
import PlaceOrder from './Step6';

// class base
//   Step 6: Review Order and Place Order
class Step6Container extends Component {
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

    
    render() {
        return ( 
            <div className="container">
                <h1>Place a Order</h1>
                <PlaceOrder 
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

// export Step 6 container
export default Step6Container;