// import React 
import React from 'react';

// import emailjs 
import emailjs from 'emailjs-com';

const Email = () =>  {

    // send email
    function sendEmail(e) {
        // prevent page refresh
        e.preventDefault();

        emailjs.sendForm('service_sif3sjh', 'template_ucr3cn5', e.target, 'user_z6H8zvrYRpAv4Iq5AKEbW')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        // restting the fields of the form
        e.target.reset();
    }

    return (
        <div>
            <h1>Have more questions?</h1>
            <h4>Email the designer</h4>
            <form onSubmit={sendEmail}>
                <label>Name: </label>
                <input 
                    type="text"
                    name="name"
                />
                <br />
                <label>Email Address:</label>
                <input
                    type="text"
                    name="email"
                />
                <br />
                <label>Message: </label>
                <textarea 
                    rows="5"
                    name="message"
                />
                <br />
                <input type="submit" value="Send Email"/>
            </form>
        </div>
    )
}

// export Email
export default Email;