import React from 'react';
import { useRef, useState } from 'react';
import "../components/Contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()
    const [confirmationMessage, setConfirmationMessage] = useState(''); // State to store the confirmation message


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_bify4fd', 'template_r19al4d', form.current, {
            publicKey: 'r39B-f4CpUmLg8LSE',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setConfirmationMessage('Email sent successfully!');
            },
            (error) => {
              console.log('FAILED...', error.text);
              setConfirmationMessage('Failed to send Email, please try again');
            },
          );
          e.target.reset()
      };

  return (
    <div className='contact-container'>
      <h1>Contact</h1>
      <div className='linkedin-info'>
        <h3>Check out my LinkedIn page!</h3>
        <a href="https://www.linkedin.com/in/andrew-brandon-43b4561b6" target="_blank" rel='noopener noreferrer'>
        <button className='LinkedInButton'>LinkedIn</button>
        </a>
      </div>
      <section>
      <div> 
          <h2>Contact Me via Email!</h2>
          <form ref={form} onSubmit={sendEmail}>
              <input type = "text"
              placeholder= "Name"
              name = 'user_name' required/>
              <input type = "email"
              placeholder= "Email"
              name = 'user_email' required/>
              <textarea name = "content"
              cols= "30" rows = "10"
              placeholder='Message' required></textarea>
              <button type='submit'
              className='SendButton'>Send Message</button>
          </form>
          {confirmationMessage && <p className="confirmation">{confirmationMessage}</p>} {/* Show confirmation message */}
      </div>
      </section>
    </div>
  );
};

export default Contact;