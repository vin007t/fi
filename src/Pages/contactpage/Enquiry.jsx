import React, { useState } from 'react';
import './Enquiry.css';
import Contac from './images/Contac.jpg';
import Msg from './images/Msg.jpg';
import Ph from './images/Ph.jpg';
import Location from './images/Location.jpg';

const Enquiry = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [project, setProject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name,email,mobile,address,state,city,project,message)
      
            let response = await fetch('http://localhost:3010/sendData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name,email,mobile,address,state,city,project,message})
            });

            response = await response.json()
            console.log(response)
       
    };

    return (
        <div className="contact-page">
            <div className="image-container">
                <img src={Contac} alt="Contact Us" />
            </div>
            <div className="banner">
                <h1>Contact Us</h1>
            </div>
            <div className="intro-text">
                <p>We would love to hear from you. Our solution experts will cater to all your needs and enquiries.
                     Whether you are looking to renovate, reconstruct or upgrade your space, our experts will guide 
                     you from conceptualization to implementation. Leave us a message, and we'll get back to you as soon as possible.</p>
            </div>
            <div className="contact-cards">
                <div className="contact-card">
                    <h3><img src={Msg} alt="Email ID" /><strong>Email ID</strong></h3>
                    <p>Kvats9910@gmail.com</p>
                </div>
                <div className="contact-card">
                    <h3><img src={Ph} alt="Phone" /><strong>Phone</strong></h3>
                    <p>+123 456 7890</p>
                </div>
                <div className="contact-card">
                    <h3><img src={Location} alt="Address" /><strong>Address</strong></h3>
                    <p>Adarsh Nagar</p>
                </div>
            </div>
            <div className="form-container">
                <h2><u>Enquiry Form</u></h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name*</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile*</label>
                        <input type="tel" id="mobile" name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)}  required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address*</label>
                        <input type="text" id="address" name="address" value={address} onChange={(e)=>setAddress(e.target.value)}  required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State*</label>
                        <input type="text" id="state" name="state" value={state} onChange={(e)=>setState(e.target.value)}  required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City*</label>
                        <input type="text" id="city" name="city" value={city} onChange={(e)=>setCity(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="project">Nature of Project*</label>
                        <input type="text" id="project" name="project" value={project} onChange={(e)=>setProject(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message*</label>
                        <textarea id="message" name="message" rows="5" value={message} onChange={(e)=>setMessage(e.target.value)}  required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="customer-care">
                <h2>Customer Care</h2>
                <div className="service-box">
                    <p><strong>Plumber Service:</strong> 12345xxxxx</p>
                    <p><strong>Other Services:</strong> 98765xxxxx</p>
                    <p>Monday - Saturday (Between 9:00 AM to 8:00 PM)</p>
                </div>
            </div>
            <div className="bottom-banner">
                <p>Hope you found it useful. Pleasure connecting with you.</p>
            </div>
        </div>
    );
};

export default Enquiry;