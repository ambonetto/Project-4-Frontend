# Project 4: Your Capstone Project

## Title: JB Designs: Screen Printing

## Description: 
JB Designs is an online application to bring to life custom screen printing designs. To start, create an account and begin brainstorming ideas. Once a design is choosen, place an order, and watch as your design comes to life. 

## Table of contents
* Wireframe
* Flow Diagram
* Entity Relationship Diagram
* User Stories
* App
* Features
* Future Additions
* Languages Used
* Packages/Libraries
* Deployment
* Contribute
* Issue and Resolutions
* Submit a Ticket
* Resources

## Wireframe

* All Designs Show Page: <br />
![alt text](![alt text](https://github.com/ambonetto/Project-4-Frontend/blob/master/Images/AllDesigns.png))

* See Images Folder: AllDesigns.png

* All Shirts Show Page: <br />
![alt text](![alt text](https://github.com/ambonetto/Project-4-Frontend/blob/master/Images/AllShirts.png))

* See Images Folder: AllShirts.png

* Shirts Show Page: <br />
![alt text](![alt text](https://github.com/ambonetto/Project-4-Frontend/blob/master/Images/ShirtsShowpage.png))

* See Images Folder: ShirtsShowpage.png

## Flow Diagram

![alt text](https://github.com/ambonetto/Project-4-Frontend/blob/master/Images/FlowDiagram.png)

* See Images Folder: FlowDiagram.png

## Entity Relationship Diagram (ERD)

* ERD:

![alt text](https://github.com/ambonetto/Project-4-Frontend/blob/master/Images/ERD.png)

* See Images Folder: ERD.png

## User Stories

* As an unregistered user, I want to sign up, so that I can order shirts.

* As an unregistered user, I want to see designs, so that I can decide to place an order.

* As a registerered user, I want to see my orders, so that I can reorder.

* As a registered user, I want to like and comment designs, so that I can provide feedback.

* As a registered user, I want to place an order, so that I can order custom shirts.

## App

- **App:** http://jb-designs.surge.sh/

## Features

* Login, Sign Up, and Sign Out of App
* View, Update, and Delete Profile
* View Designs
* Admin access to Add Design and/or Delete Design
* Place an Order
    * Upload Design or Select a Design
    * Select Shirt Type
    * Select Shirt Color
    * Select Shirt Size and Quantity
    * Review and Place Order
* About Designer Page
* Email Designer
* Display Designer's location
* About Screen Printing

## Future Additions

* Pass order information to backend
* Pass order information to be displayed before submitting order
* Comment and/or Rate a design
* Review Orders Placed
* Reorder from Orders Placed
* Admin access display's all orders
* Admin access can exoprt all orders
* Set up payment process
* Display prices
* Display status bar for place order steps

## Languages Used

* HTML
* CSS
* JavaScript

## Packages/Libraries

* React
* React Router
* React Router Dom
* Axios
* React-Slideshow-Image
* React-Fontawesome
* Email.js
* Google-Map-React
* @iconify/react
* @iconify/icons-mdi

## Deployment

* Surge

## Contribute

**Source Code:** https://github.com/ambonetto/Project-4-Frontend

## Issue and Resolutions

### Issue
* Passing data in Place Order
    * Pass information the user selects from one step to another

### Resolution
* Passing information between steps using state
    * Result: Certain variables pass correctly (allTypes, allDesigns, and allColors)
    * Cause: Not all variable pass correctly between each step; refactoring code needed to pass information correctly
        * Code Used: 
    ```
        {...this.state}
    ```

### Issue
* Using radio buttons to select options when mapping over information coming from the backend database
    * Issue: Unable to display all infromation and radio buttons needed as well as knowing which button is selected

### Resolution
* Mapping over the database with displaying each option with a radio button
    * Result: Value changing when selecting an option
    * Cause: Setting the value equal to the select value and changing the state based on what is selected
        * Code Used: 
    ```
        handleCheck = (e) => {
            this.setState({
                isChecked: e.target.value,
                color: e.target.value
            })
        }

        <form onSubmit={(e) => props.handleType(e)}>
            <Link to="/placeorder/step4">Submit</Link>
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
        </form>
    ```

## Submit a Ticket

* If a problem occurs with the Drink Mixer or have suggestions for updates, please add them here: 

https://github.com/ambonetto/Project-4-Frontend/issues

**Note:** Responses can take up to 48 hours. Thank you for shopping! 

## Resources

* Contributors:
    - Andrea Bonetto
* Websites:
    - **npm** https://www.npmjs.com/
    - **ReactJS** https://reactjs.org
    - **w3schools** https://www.w3schools.com/
    - **MDN web docs** https://developer.mozilla.org/en-US/
    - **stackoverflow** https://stackoverflow.com/
    - **GeeksforGeeks** https://www.geeksforgeeks.org
    - **GitHub Docs** https://docs.github.com/en
    - **Google Fonts** https://fonts.google.com/
    - **CSS-TRICKS** https://css-tricks.com/
    - **Google Maps React** https://tomchentw.github.io/react-google-maps/
    - **Surge** https://surge.sh/
* Instructors: 
    - Casey R Harding
    - David Magbee
    - Isha Arora
    - Leah Mattern
* SEI Classmates