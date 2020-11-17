// import React
import React, {Component} from 'react';

// import Design
import Design from './Design';

// import Link and withRouter
import {Link, withRouter} from 'react-router-dom';

// import helper
import {destroyDesign} from '../../services/api_helper';

// class base
class DesignContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allDesigns: props.allDesigns,
            currentUser: props.currentUser,
            designs: null
        }    
    }

    // delete Design
    deleteDesign = async (id) => {
        console.log(id)
        await destroyDesign(id)
        const allDesigns = this.state.allDesigns;
        this.setState({
            allDesigns: allDesigns
        })

        // returns to all designs
        this.props.history.push("/designs")
    }

    render() {
        return(
            <div className="container">
                <h1>Designs</h1>
                {!this.state.currentUser.admin === false ? 
                    <Link to="/designs/new">Add new Design</Link>
                :
                   null 
                }

                <Design 
                    allDesigns={this.state.allDesigns}
                    currentUser={this.state.currentUser}
                    deleteDesign={this.deleteDesign}
                />
            </div>
        )
    }
}

// export Design Container
export default withRouter (DesignContainer);