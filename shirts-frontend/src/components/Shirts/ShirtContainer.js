// import React
import React, {Component} from 'react';

// import helper for backend
import {allShirts} from '../../services/api_helper';

// import all shirts
import AllShirts from './AllShirts';

// class base
class ShirtContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            shirts: null
        }
    }

    componentDidMount() {
        this.getShirts();
    }

    // get all shirts function
    getShirts = async() => {
        const shirts = await allShirts();

        console.log(shirts)

        this.setState({
            shirts: shirts.data
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Hello</h1>
                <AllShirts 
                    shirts={this.state.shirts}
                />
            </div>
        )
    }
}

// export Shirt Container
export default ShirtContainer;