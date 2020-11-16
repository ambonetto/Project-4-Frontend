// import React
import React, {Component} from 'react';

// import Design
import Design from './Design';

// import Link, Route, and withRouter
import {Route, Link, withRouter} from 'react-router-dom';

// import Create Design
import CreateDesign from './CreateDesign';

// import helper
import {newDesignPost} from '../../services/api_helper';

// class base
class DesignContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allDesigns: props.allDesigns,
            currentUser: props.currentUser,
            designs: null
        }    
        console.log(props)
    }

    // create Design
    createDesign = async (e, designData) => {
        // prevent page refresh
        e.preventDefault();
        const newDesign = await newDesignPost(designData);

        const designs = this.state.designs;

        this.setState({
            designs: newDesign
        })
        
        // redirects back to all designs 
        this.props.history.push('/designs');
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
                />
                <Route path="/designs/new" render={() => {
                    return <CreateDesign 
                        createDesign={this.createDesign}
                    />
                }} />
            </div>
        )
    }
}

// export Design Container
export default withRouter (DesignContainer);