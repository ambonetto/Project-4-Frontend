// import React
import React from 'react';

// import Link 
import {Link} from 'react-router-dom';

// function base
//   Step 6: Review Order and Place Order
const PlaceOrder = (props) => {
    console.log("HEllllloooo!!")
    console.log(props)
    return(
        <div className="type">
            <h2>Step 5: Review and Place Order</h2> 
            <h3>Please Review your order before proceeding</h3>
                <Link to="/">Submit</Link>
                <h6>Your Order</h6>
        </div>
    )
}

// export Place Order
export default PlaceOrder;