// import React
import React, {Component} from 'react';

// import Link
import {Route, Link} from 'react-router-dom';

// import Step 3 Container
import Step3Container from '../Step3/Step3Container';

// class base
//  Step 2: Upload Design
class UploadDesign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            design: props.design,
            selectFile: null,
            URL: null,
            image: null,
            next: false,
            allTypes: null
        }
        this.fileInput = React.createRef()
    }


    // handle file selected function
    handleFileSelected = (e) => {
        console.log(e.target)
        console.log(e.target.files[0])
        console.log(e.target.value)

        // this will give a preview of the image
        this.setState({
            selectFile: e.target.value,
            image: URL.createObjectURL(e.target.files[0])
        })

        console.log(this.state)

    }

    // handle upload function
    handleUpload = (e) => {
        // prevents page refresh
        e.preventDefault();

        console.log(this.state)
        console.log(this.props.selectFile)
        console.log(this.fileInput)

        this.setState({
            image: this.state.selctedFile,
            next: true
        })

        console.log(this.state)
    }

    render() {
        return(
            <div className="container">

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
                                onChange={this.handleFileSelected}
                            />
                            {/* <h3>Upload from the Web</h3> */}
                            {/* <input 
                                type="text"
                                name="image"
                                value={this.state.URL}
                                onChange={this.handleFileURL}
                            /> */}
                            <br />
                            <Link to="/placeorder/step2">Submit</Link>
                        </form>
                        <img className="image" src={this.state.image} />
                        {/* <img className="image" src={this.state.URL} /> */}
                        <br />
                    </div>

                    <Route path="/placeorder/step2" render={() => {
                        return <Step3Container 
                            allTypes={this.state.allTypes}
                            design={this.state.design}
                            image={this.state.image}
                        />
                    }} />
            </div>
        )
    }
}

// export Upload Design
export default UploadDesign;