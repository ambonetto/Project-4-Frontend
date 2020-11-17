// import React
import React, {Component} from 'react';

// import Shirt Type
import SelectColor from './Step4';

// class base
//   Step 4: Select Shirt Color -> black, white, pink, etc.
class Step4Container extends Component {
    constructor(props){
        super(props);

        this.state = {
            design: props.design,
            selectFile: props.selectFile,
            image: props.image,
            allTypes: props.allTypes,
            allDesigns: props.allDesigns,
            allColors: props.allColors,
            isChecked: false,
            type: props.type,
            color: null
        }
    }

    // handle check function
    handleCheck = (e) => {
        this.setState({
            isChecked: e.target.value,
            color: e.target.value
        })
    }

    // handle type function
    handleType = (e) => {
        // prevents page refresh
        e.preventDefault();

        this.setState({
            color: this.state.isChecked
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Place a Order</h1>
                <SelectColor
                    allTypes={this.state.allTypes}
                    allDesigns={this.state.allDesigns}
                    allColors={this.state.allColors}
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

// export Step 4 Container
export default Step4Container;