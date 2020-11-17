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
                <h1>Add a New Design!</h1>
                <div className="createDesignWrapper">
                    <form onSubmit={(e) => this.props.createDesign(e, this.state)}>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            placeholder="Name of New Design"
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            name="image"
                            value={this.state.image}
                            placeholder="Image"
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="Post a new Design" />
                    </form>
                </div>
            </div>
        )
    }
}

// export Create Design
export default CreateDesign;