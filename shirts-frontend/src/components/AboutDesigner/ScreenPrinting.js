// import React
import React from 'react';

const ScreenPrinting = () => {
    return (
        <div className="aboutMeContainer">
            <div className="imgWrapper">
                <img className="image" src="https://lh3.googleusercontent.com/proxy/1ScJDG202WwiifwKl8X8mjxRCQ0NP_nQJ3aDywp3Luylmg6c312CjprAm1HRwWvbQz2wr_HF1E8DPAjiZneT-SicPcaXjoL7W2ECzaI6x5t4p4XPoJU1QUWNqptLk5jASR8" alt="Screen Printing" />
                <span className="caption">Screen Printing</span>
            </div>
            <div className="aboutMeWrapper">
                <h1>What is Screen Printing?</h1>
                <br />
                <p className="info">
                    Screen Printing, which is also known as Silk Screening, is a method of
                    printing graphics on a t-shirt using thick inks that lay on top of the shirt rather
                    than soaking into the shirt. 
                </p>
                <br />
                <h1>How Does it Work?</h1>
                <p className="info">
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