// import React 
import React, {Component} from 'react';

// import Check Box
import CheckBox from './CheckBox';

class ShirtsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            designs: [
                {id: 1, value: "Choose from designs", isChecked: false},
                {id: 2, value: "Upload my design", isChecked: false}
            ]
        }
    }

    // handle check function
    handleCheck = (e) => {
        let designs = this.state.designs
        designs.forEach(design => {
            if (design.value === e.target.value) {
                design.isChecked = e.target.checked
            }
        })

        console.log(designs)

        this.setState({
            designs: designs
        })
    }

    render() {
        return(
            <div className="container">
                <h1>Place an Order</h1>
                <h2>Step 1: Design</h2>
                {
                    this.state.designs.map((design, index) => {
                        return(
                            <CheckBox 
                                key={index} 
                                {...design} 
                                handleCheck={this.handleCheck}
                            /> 
                        )
                    })
                }
            </div>
        )
    }
}

// export Shirts Container
export default ShirtsContainer;