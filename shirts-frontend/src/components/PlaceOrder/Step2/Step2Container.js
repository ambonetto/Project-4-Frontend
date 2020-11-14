// import React 
import React, {Component} from 'react';

// import Upload Design
import UploadDesign from './UploadDesign';

// import Design
import SelectedDesign from './SelectedDesign';

// import helper
import {allDesigns} from '../../../services/api_helper';

// clase base
//  Step 2: Select Design/Upload Design
class Step2Container extends Component {
    constructor(props){
        super(props);

        this.state = {
            design: props.design, 
            image: null,
            prints: props.prints
        }
    }

    // handle upload function
    handleUpload = (e) => {
        // prevents page refresh
        e.preventDefault();

        console.log(this.state)

        this.setState({
            image: this.state.selctedFile
        })
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
                    />
                }
            </div>
        )
    }
}

// export Step 2 Container
export default Step2Container;