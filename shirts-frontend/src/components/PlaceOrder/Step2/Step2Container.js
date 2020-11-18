// import React 
import React, {Component} from 'react';

// import Upload Design
import UploadDesign from './UploadDesign';

// import Design
import SelectedDesign from './SelectedDesign';

// clase base
//  Step 2: Select Design/Upload Design
class Step2Container extends Component {
    constructor(props){
        super(props);

        this.state = {
            design: props.design,
            allDesigns: props.allDesigns,
            image: props.image,
            selectFile: props.selectFile,
            allTypes: props.allTypes,
            allColors: props.allColors
        }
        this.fileInput = React.createRef()
    }

        // handle check function
        handleCheck = (e) => {
            const {name, value} = e.target;
    
            this.setState({
                // isChecked: e.target.value,
                // selectFile: e.target.value
                [name]: value
            })
        } 

        // handle Select function
        handleSelect = (e) => {
            this.setState({
                selectFile: e.target.value
            })
        }

    render() {
        return(
            <div className="placeOrder">
                {this.state.design === "upload" ? 
                    <UploadDesign 
                        allTypes={this.state.allTypes}
                        allDesigns={this.state.allDesigns}
                        allColors={this.state.allColors}
                        design={this.state.design}
                        image={this.state.image}
                        selectFile={this.state.selectFile}
                        type={this.state.type}
                        isChecked={this.state.isChecked}
                        {...this.state}
                    /> 
                :
                    <SelectedDesign 
                        allTypes={this.state.allTypes}
                        allDesigns={this.state.allDesigns}
                        allColors={this.state.allColors}
                        design={this.state.design}
                        image={this.state.image}
                        selectFile={this.state.selectFile}
                        type={this.state.type}
                        isChecked={this.state.isChecked}
                        handleCheck={this.handleCheck}
                        handleSelect={this.handleSelect}
                        {...this.state}
                    />
                }
            </div>
        )
    }
}

// export Step 2 Container
export default Step2Container;