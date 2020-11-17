// import React
import React from 'react';

// import About Designer
import AboutDesigner from './AboutDesigner';

// import Email
import Email from './Email';

// import Map
import Map from './Map';

// import Screen Printing
import ScreenPrinting from './ScreenPrinting';

// function base
//  displaying information about the designer
const AboutDesignerContainer = () => {
    return (
        <div className="container">
            <h1>About the Designer</h1>
            <AboutDesigner />
            <div className="lineBreak" />
            <ScreenPrinting />
            <div className="lineBreak" />
            <Email />
            <div className="lineBreak" />
            <Map />
        </div>
    )
}

// export About Design Container
export default AboutDesignerContainer;