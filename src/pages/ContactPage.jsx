import React from 'react';
import { useRef } from 'react';
import "../components/Contact.css"
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_bify4fd', 'template_r19al4d', form.current, {
            publicKey: 'r39B-f4CpUmLg8LSE',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };

  return (
    <section>
    <div>
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
            <input type = "text"
            placeholder= "Name"
            name = 'user_name' required/>
             <input type = "email"
            placeholder= "Email"
            name = 'user_email' required/>
             <textarea name = "content"
            cols= "30" rows = "10"
            placeholder='Message'></textarea>
            <button type='submit'
            className='SendButton'>Send Message</button>
        </form>
    </div>
    </section>
  );
};

export default Contact;