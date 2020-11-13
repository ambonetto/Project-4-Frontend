// import React
import React from 'react';

const CheckBox = (props) => {
    return (
        <div>
            <input 
                type="checkbox"
                checked={props.isChecked}
                value={props.value}
                onClick={props.handleCheck}
            /> 
            {props.value}
        </div>
    )
}

// export Check Box
export default CheckBox;