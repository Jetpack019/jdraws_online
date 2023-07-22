import React, { useState } from 'react'
import "./ContactForm.scss"
function ContactForm() {
    const [message,setMessage] = useState(false)

    const handleSubmit = (e)=>{
       e.preventDefault();
       setMessage(true)
    }
  
  return (
    <div className="contact-form">
        <div className="container">
            <div className="left">
                            <p> <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3854.73460529069!2d120.81989507401617!3d14.951872168382224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33965559e98de989%3A0x113c1e592615fe9e!2sBatasan%20St.!5e0!3m2!1sen!2sph!4v1687659705638!5m2!1sen!2sph"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
                ></iframe></p>
            </div>
            <div className="right">
            <h2>Contact Me</h2>
          <form target="_blank"  action="https://formsubmit.co/banagjadeross@gmail.com" method="POST">
            <div className="info">
            <input type="text" name="name"placeholder='Name' className='name'/>
            <input type="text" placeholder='Contact #' className='number'/>
            </div>
            <input type="email" name="email" placeholder='Email' required/>
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit" >Send</button>
        
          </form>
                 
            </div>
        </div>
    </div>
  )
}

export default ContactForm
