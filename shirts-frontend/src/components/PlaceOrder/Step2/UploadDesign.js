// import React
import React, {Component} from 'react';

// import Link
import {Link} from 'react-router-dom';

// class base
//  Step 2: Upload Design
class UploadDesign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            design: props.design,
            image: props.image,
            selectFile: props.selectFile
        }
        this.fileInput = React.createRef()
    }


    // handle file selected function
    handleFileSelected = (e) => {
        const selectFile = this.state.selectFile

        // this will give a preview of the image
        this.setState({
            selectFile: e.target.value,
            image: URL.createObjectURL(e.target.files[0])
        })
    }

    // handle upload function
    handleUpload = (e) => {
        // prevents page refresh
        e.preventDefault();

        this.setState({
            image: this.state.selctedFile,
        })
    }

    // handle file URL function
    handleFileURL = (e) => {
        
        this.setState({
            selectFile: e.target.value
        })
    }

    render() {
        return(
            <div className="placeOrder">
                    <div>
                        <h2>Step 1: Design</h2>
                        <h6>Note: May be contacted if there is an issue with the design</h6>
                        <h1>Upload a Custom Design</h1>
                        <h3>Upload from Computer</h3>
                        <form onSubmit={(e) => {this.handleUpload(e)}}>
                            <input 
                                type="file"
                                name="image"
                                ref={this.selectFile}
                                value={this.state.selectFile}
                                onChange={this.handleFileSelected}
                            />
                            <h3>Upload from the Web</h3>
                            <input 
                                type="text"
                                name="image"
                                value={this.state.selectFile}
                                onChange={this.handleFileURL}
                            />
                            <br />
                            <Link to="/placeorder/step2">Submit</Link>
                        </form>
                        <img className="image" src={this.state.image}/>
                        <br />
                    </div>
            </div>
        )
    }
}

// export Upload Design
export default UploadDesign;