// import React
import React, {Component} from 'react';

// import Place Order
import PlaceOrder from './Step6';

// class base
//   Step 6: Review Order and Place Order
class Step6Container extends Component {
    constructor(props) {
        super(props)
        
        console.log(props)
    }

    
    render() {
        return ( 
            <div className="container">
                <h1>Place a Order</h1>
                <PlaceOrder 
                    allTypes={this.state.allTypes}
                    allDesigns={this.state.allDesigns}
                    design={this.state.design}
                    image={this.state.image}
                    selectFile={this.state.selectFile}
                    type={this.state.type}
                    isChecked={this.state.isChecked}
                />
            </div>
        )
    }
}

// export Step 6 container
export default Step6Container;