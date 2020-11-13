// import React
import React from 'react';

const CheckBox = (props) => {
    console.log("I am so here")
    return (
        <div>
            <form onSubmit={(e) => this.handleLocation(e)}>
                <input 
                    type="radio"
                    checked={props.isChecked}
                    value={props.value}
                    onClick={props.handleCheck}
                /> 
                {props.value}
            </form>
        </div>
    )
}

// export Check Box
export default CheckBox;