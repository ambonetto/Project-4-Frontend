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

        console.log(props)
        this.state = {
            design: props.design,
            allDesigns: props.allDesigns,
            image: props.image,
            selectFile: props.selectFile,
            allTypes: props.allTypes
        }
        this.fileInput = React.createRef()
    }

    render() {
        return(
            <div className="placeOrder">
                {this.state.design === "upload" ? 
                    <UploadDesign 
                        design={this.state.design}
                        selectFile={this.state.selectFile}
                        handleUpload={this.handleUpload}
                        fileInput={this.fileInput}
                        allDesigns={this.state.allDesigns}
                        allTypes={this.state.allTypes}
                        image={this.state.image}
                    /> 
                :
                    <SelectedDesign 
                        design={this.state.design}
                        allDesigns={this.state.allDesigns}
                        selectFile={this.state.selectFile}
                        image={this.state.image}
                    />
                }
            </div>
        )
    }
}

// export Step 2 Container
export default Step2Container;