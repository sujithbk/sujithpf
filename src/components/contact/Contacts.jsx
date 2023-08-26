import React from 'react'
import './contact.css'

function Contacts() {
  return (
    <section id="contact-section" >
    <h1 className="heading">contact</h1>
    <div className="form">
        <input type="text" placeholder="name"/>
        <input type="email" placeholder="email"/>
        <input type="text" placeholder="subject"/>
        <textarea placeholder="message"></textarea>
        <button className="contact-btn">contact</button>
    </div>
</section>
  )
}

export default Contacts