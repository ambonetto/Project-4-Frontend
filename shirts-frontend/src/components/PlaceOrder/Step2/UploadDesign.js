// import React
import React, {Component} from 'react';

// class base
class UploadDesign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            design: props.design
        }
        console.log(design)
    }

    render() {
        return(
            <div className="container">
                <h1>Hello</h1>
            </div>
        )
    }
}

// export Upload Design
export default UploadDesign;