// import React
import React, {Component} from 'react';

// class base
class UploadDesign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            design: props.design,
            selectFile: null
        }
    }


    // handle file selected function
    handleFileSelected = (e) => {
        console.log(e.target.files[0])

        this.setState({
            selectFile: URL.createObjectURL(e.target.files[0])
        })
    }

    render() {
        return(
            <div className="container">
                <h1>Upload a Custom Design</h1>
                <input 
                    type="file"
                    onChange={this.handleFileSelected}
                />
                <img className="image" src={this.state.selectFile} />
                <h6>Note: May be contacted if there is an issue with the design</h6>
            </div>
        )
    }
}

// export Upload Design
export default UploadDesign;