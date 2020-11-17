// import React
import React from 'react';

// import Link 
import {Link} from 'react-router-dom';

// function base
//  Step 4: Select Shirt Color -> black, white, pink, etc.
const SelectColor = (props) => {
    return(
        <div className="type">
            <h2>Step 3: Shirt Color</h2> 
            <h3>Select a Color</h3>
           <form onSubmit={(e) => props.handleType(e)}>
                <Link to="/placeorder/step4">Submit</Link>
                <div className="colorContainer">
                    <div className="colorWrapper">
                        {props.allColors.map((colors, index) => {
                            return <div className="colorTexts" key={index}>
                                <label className="colorText">
                                    <input 
                                        type="radio"
                                        checked={props.checked}
                                        value={index}
                                        onChange={props.handleCheck}
                                    />
                                    {colors.color}
                                </label>
                                <div className="colorImage">
                                    <img className="imageColor" src={colors.image} alt={colors.color}/>
                                </div>
                            </div>
                        })} 
                    </div>
                </div>
            </form>
        </div>
    )
}

// export color
export default SelectColor;