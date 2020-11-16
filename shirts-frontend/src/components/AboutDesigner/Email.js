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
            <div className="emailWrapper">
               <form onSubmit={sendEmail}>
                    <label className="label">Name: </label>
                    <input 
                        type="text"
                        name="name"
                    />
                    <br />
                    <label className="label">Email Address:</label>
                    <input
                        type="text"
                        name="email"
                    />
                    <br />
                    <label className="label">Message: </label>
                    <textarea 
                        rows="5"
                        name="message"
                    />
                    <br />
                    <input type="submit" value="Send Email"/>
                </form> 
            </div>
            
            <h5>Note: Please allow 48 hours for responses</h5>
        </div>
    )
}

// export Email
export default Email;