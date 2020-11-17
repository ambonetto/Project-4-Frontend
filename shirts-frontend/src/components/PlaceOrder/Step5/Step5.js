// import React
import React from 'react';

// import Link 
import {Link} from 'react-router-dom';

// function base
//   Step 5: Select Shirt Sizes and Quantity -> Medium, 15
const SelectSize = (props) => {
    return(
        <div className="type">
            <h2>Step 4: Shirt Size and Quantity</h2> 
            <h3>Select Size and Number of Shirts</h3>
           <form onSubmit={(e) => props.handleType(e)}>
                <Link to="/placeorder/step5">Submit</Link>
                <br />
                <div className="shirtsContainer">
                    <div className="shirtsWrapper">
                        <label>
                            <input 
                                type="radio"
                                checked={props.checked}
                                value="Small"
                                onChange={props.handleCheck}
                            />
                            Small
                        </label>
                        <input className="number"
                            type="number"
                            value={props.quantity}
                            placeholder="0"
                        />
                    </div>
                    <div className="shirtsWrapper">
                        <label>
                            <input 
                                type="radio"
                                checked={props.checked}
                                value="Medium"
                                onChange={props.handleCheck}
                            />
                            Medium
                        </label>
                        <input className="number"
                                type="number"
                                value={props.quantity}
                                placeholder="0"
                        />
                    </div>
                    <div className="shirtsWrapper">
                        <label>
                            <input 
                                type="radio"
                                checked={props.checked}
                                value="Large"
                                onChange={props.handleCheck}
                            />
                            Large
                        </label>
                        <input className="number"
                                type="number"
                                value={props.quantity}
                                placeholder="0"
                        />
                    </div>
                    <div className="shirtsWrapper">
                        <label>
                            <input 
                                type="radio"
                                checked={props.checked}
                                value="Extra Large"
                                onChange={props.handleCheck}
                            />
                            Extra Large
                        </label>
                        <input className="number"
                            type="number"
                            value={props.quantity}
                            placeholder="0"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

// export size and quantity
export default SelectSize;