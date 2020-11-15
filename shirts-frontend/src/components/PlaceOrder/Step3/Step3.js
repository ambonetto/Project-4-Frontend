// import React
import React from 'react';

// import Link 
import {Link} from 'react-router-dom';

//  Step 3: Select Shirt Type
const SelectType = (props) => {
    console.log("I am so here!")
    console.log(props)
    return(
        <div className="type">
           {/* {props.allTypes.map((shirtType, index) => {
               return <div key={index}> 
                <li>{shirtType.type}</li>
                <img className="image" src={shirtType.image} alt={shirtType.type}/>
                </div>
           })} */}
           <form onSubmit={(e) => props.handleType(e)}>
                <Link to="/placeorder/step3">Submit</Link>
                <label>
                    <input 
                        type="radio"
                        checked={props.checked}
                        value="Long Sleeve"
                        onChange={props.handleCheck}
                    />
                    Long Sleeve
                </label>
                <img className="image" src="https://jiffyshirts.imgix.net/7e438a72a503ef.jpg?ixlib=rb-0.3.4&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2" 
                    alt="Long Sleeve"
                />
                <br />
                <label>
                    <input 
                        type="radio"
                        checked={props.checked}
                        value="Short Sleeve"
                        onChange={props.handleCheck}
                    />
                    Short Sleeve
                </label>
                <img className="image" src="https://jiffyshirts1.imgix.net/b4a90b6068c2d2.png?ixlib=rb-0.3.4&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2"
                    alt="Short Sleeve"
                />
                <br />
                <label>
                    <input 
                        type="radio"
                        checked={props.checked}
                        value="Sweatshirt"
                        onChange={props.handleCheck}
                    />
                    Sweatshirt
                </label>
                <img className="image" src="https://jiffyshirts.imgix.net/8cd2483b2058cd.jpg?ixlib=rb-0.3.4&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2"
                    alt="Sweatshirt"
                />
            </form>
        </div>
    )
}

// export type
export default SelectType;