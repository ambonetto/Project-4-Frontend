// import React
import React from 'react';

// function base 
//  showing all shirts and grouping by brand
const AllShirts = (props) => {
    console.log(props)
    return (
        <div>
            {props.shirts.map((shirt, index) => {
                return(
                    <div key={index}>
                        <h2>{shirt.brand}</h2>
                        <img src={shirt.image} alt={shirt.brand} />
                        <h5>{shirt.description}</h5>
                    </div>
                )
            })}
        </div>
    )
}

// export all shirts
export default AllShirts;