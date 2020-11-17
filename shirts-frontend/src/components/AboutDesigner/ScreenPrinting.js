// import React
import React from 'react';

const ScreenPrinting = () => {
    return (
        <div className="aboutScreenPrintingContainer">
            <div className="imgWrapper">
                <img className="imageScreenPrinting" src="https://raw.githubusercontent.com/ambonetto/Project-4-Frontend/master/Images/ScreenPrinting.jpg?_sm_au_=iVVzMk7320SWq3tQL321jK0f1JH33" alt="Screen Printing" />
                <span className="caption">Screen Printing</span>
            </div>
            <br />
            <div className="aboutScreenPrintingWrapper">
                <h1>What is Screen Printing?</h1>
                <br />
                <p className="infoScreenPrinting">
                    Screen Printing, which is also known as Silk Screening, is a method of
                    printing graphics on a t-shirt using thick inks that lay on top of the shirt rather
                    than soaking into the shirt. 
                </p>
                <br />
                <h1>How Does it Work?</h1>
                <p className="infoScreenPrinting">
                    A thin mesh is stretched tightly over a frame (originally the screen was made from silk, 
                    however, mostly made from polyester today). A negative of the design is printed onto the screen
                    to be placed against the shirt. Once set correctly, ink is rolled over the screen, only the areas
                    where the design has been printed allows ink to slip through. The ink then sets on the t-shirt
                    and is put aside to dry.
                </p>
                <a href="https://www.onehourtees.com/blog/what-is-screen-printing-how-does-it-work/" target="_blank">Continue Reading</a>
            </div>
            </div>
    )
}

// export Screen Printing
export default ScreenPrinting;