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
            design: props.design
        }

        console.log(this.state.design)
        console.log(typeof(this.state.design))
        console.log(typeof("upload"))
    }

    render() {
        return(
            <div className="container">
                {this.state.design === "upload" ? 
                    <UploadDesign /> 
                :
                    <SelectedDesign />
                }
            </div>
        )
    }
}

// export Step 2 Container
export default Step2Container;