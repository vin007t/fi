import React, { useState, useEffect, useRef } from 'react';
import './Service.css';

const Service = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    address: '',
    phoneNumber: '',
    description: ''
  });

  const formRef = useRef(null);
  const [formHeight, setFormHeight] = useState('auto');

  useEffect(() => {
    if (formRef.current) {
      setFormHeight(formRef.current.offsetHeight);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here
    console.log(formData);
    // Show alert on submit
    alert('We will connect with you shortly');
    // Reset form after submission
    setFormData({
      customerName: '',
      address: '',
      phoneNumber: '',
      description: ''
    });
  };

  return (
    <div className="service-container">
      <div className="banner-top">
        Plumber Service
      </div>
      <div className="form-image-wrapper">
        <div className="service-form-container" ref={formRef}>
          <h2>Service Request Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="customerName">Customer Name:</label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description of Problem:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/155/162/original/tradesman-plumber-fixing-vector.jpg" // Replace with your image URL
          alt="Plumber Service"
          // style={{ height: formHeight }}
          className="service-image"
        />
      </div>
      <div className="banner-bottom">
        Pleasure connecting with you
      </div>
    </div>
  );
};

export default Service;
