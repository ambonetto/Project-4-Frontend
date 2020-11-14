// import React
import React, {Component} from 'react';

// class base
class UploadDesign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            design: props.design,
            selectFile: null,
            URL: null
        }
    }


    // handle file selected function
    handleFileSelected = (e) => {
        console.log(e.target.files[0])

        // this will give a preview of the image
        this.setState({
            selectFile: URL.createObjectURL(e.target.files[0])
        })
        
    }

    // handle file URL function
    handleFileURL = (e) => {
        const URL = this.state.URL

        this.setState({
            selectFile: URL
        })

        console.log(this.state.URL)
        console.log(this.state.selectFile)
    }

    render() {
        return(
            <div className="container">
                <h1>Upload a Custom Design</h1>
                <h3>Upload from Computer</h3>
                <form onSubmit={(e) => {this.handleUpload(e)}}>
                   <input 
                    type="file"
                    name={this.state.selectFile}
                    onChange={this.handleFileSelected}
                />
                <h3>Upload from the Web</h3>
                <input 
                    type="text"
                    value={this.state.URL}
                    onChange={this.handleFileURL}
                />
                <br />
                <input type="submit" value="Submit" /> 
                </form>
                <img className="image" src={this.state.selectFile} />
                <img className="image" src={this.state.URL} />
                <br />
                <h6>Note: May be contacted if there is an issue with the design</h6>
            </div>
        )
    }
}

// export Upload Design
export default UploadDesign;