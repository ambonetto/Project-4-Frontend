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
            allDesigns: props.allDesigns
        }
    }

    render() {
        return(
            <div className="container">
                {this.state.design === "upload" ? 
                    <UploadDesign 
                        design={this.state.design}
                        handleUpload={this.handleUpload}
                    /> 
                :
                    <SelectedDesign 
                        design={this.state.design}
                        allDesigns={this.state.allDesigns}
                    />
                }
            </div>
        )
    }
}

// export Step 2 Container
export default Step2Container;