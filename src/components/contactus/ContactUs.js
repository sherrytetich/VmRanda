import "./contactus.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_in1u14p', 'template_suczphh', form.current, '_X5yLrAvCd2ijAiRI')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className="contact-form" id="contact">
      <div className="w-left">

      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="UserName" className="user"/>
      <input type="email" name="user_email" placeholder="Email" className="user"/>
      <textarea name="message" placeholder="Text" className="user"/>
      <input type="submit" value="Contact Us"  className="btn"/>
    </form>
    </div>
    </div>
  )
}

export default ContactUs