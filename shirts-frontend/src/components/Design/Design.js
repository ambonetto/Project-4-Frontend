// import React
import React from 'react';

// function base
//  displaying all designs
const Design = (props) => {
    return(
        <div className="designContainer">
            <div className="designWrapper">
                {props.allDesigns.map((design, index) => {
                    return <div className="designs" key={index}>
                        <p>{design.name}</p>
                        <img className="image" src={design.image} alt={design.name} />
                        {!props.currentUser.admin === false ? 
                            <input 
                                type="submit" 
                                value="Delete Design" 
                                onClick={() => props.deleteDesign(design.id)}
                                className="button"
                            />
                        :
                            null 
                        }
                    </div>
                })}
            </div>
        </div>
    )
}

// export Designs
export default Design;