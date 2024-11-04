import { useState } from "react";

function Contact() {

    const [alertMessage, setAlertMessage] = useState('');

    const requireInput = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        const { name, value } = event.target;
        
        if (name === 'full_name' && value === '') {
            setAlertMessage('You must enter your full name');
        } else if (name === 'email') {
            if (value === '') {
            setAlertMessage('You must enter a valid email');
            } else {
                // This is a check for the email format, using a Regular Expression (Regex) - checks for common email structure and symbols that are required for an email to be valid
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    setAlertMessage('You must enter a valid email address');
                }
            }
        } else if (name === 'message' && value === '') {
            setAlertMessage('You must enter a message');
        }

        setTimeout(() => {
            setAlertMessage('');
        }, 3500);
    }

    return (
        <form className="d-flex flex-column p-5 m-5" id="contact">

            <h3 className="text-center">Contact Me</h3>

            <input type="hidden" name="subject" value="New Submission from Portfolio" />

            <input onBlur={requireInput} name="full_name" type="text" placeholder="Enter your full name" required />
            <input onBlur={requireInput} name="email" type="email" placeholder="Enter your email address" required />
            <textarea onBlur={requireInput} name="message" placeholder="Tell me something" required></textarea>
            <button className="btn-fav">Send</button>

            {alertMessage && <p className='alert-message'>{alertMessage}</p>}
        </form>
    )
}

export default Contact;