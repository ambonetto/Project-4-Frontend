// import React 
import React, {Component} from 'react';

// class base
//  creating a new design
class CreateDesign extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            image: ""
        }
    }

    // handle change function
    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="createDesignWrapper">
                    <h1>Add a New Design!</h1>
                    <div className="createDesignContainer">
                        <form onSubmit={(e) => this.props.createDesign(e, this.state)}>
                            <label className="label">Name of Design: </label>
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                placeholder="Name of New Design"
                                onChange={this.handleChange}
                            />
                            <label className="label">Image of Design: </label>
                            <br />
                            <input
                                type="text"
                                name="image"
                                value={this.state.image}
                                placeholder="Image"
                                onChange={this.handleChange}
                            />
                            <br />
                            <input className="submit" type="submit" value="Post a New Design" />
                        </form>  
                    </div>
                </div>
            </div>
        )
    }
}

// export Create Design
export default CreateDesign;