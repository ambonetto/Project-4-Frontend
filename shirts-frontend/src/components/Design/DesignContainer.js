// import React
import React, {Component} from 'react';

// import Design
import Design from './Design';

// class base
class DesignContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allDesigns: props.allDesigns
        }
    }

    render() {
        return(
            <div className="container">
                <h1>Designs</h1>
                <Design 
                    allDesigns={this.state.allDesigns}
                />
            </div>
        )
    }
}

// export Design Container
export default DesignContainer;