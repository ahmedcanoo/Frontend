import React, { useState } from 'react';

const CreateOrder = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropOffLocation: '',
    packageDetails: '',
    deliveryTime: ''
  });

  const [message, setMessage] = useState(''); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8001/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => {
        if (response.ok) {
          setMessage('Order created successfully!');
          setFormData({
            pickupLocation: '',
            dropOffLocation: '',
            packageDetails: '',
            deliveryTime: ''
          });
        } else {
          setMessage('Failed to create order. Please try again.');
        }
        return response.json();
      })
      .then(data => {
        console.log('Order created:', data);
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage('An error occurred. Please try again.');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pickup Location:</label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Drop-off Location:</label>
          <input
            type="text"
            name="dropOffLocation"
            value={formData.dropOffLocation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Package Details:</label>
          <textarea
            name="packageDetails"
            value={formData.packageDetails}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Delivery Time:</label>
          <input
            type="time"
            name="deliveryTime"
            value={formData.deliveryTime}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Order</button>
      </form> 
      {message && <p>{message}</p>}
    </div>
  );
  
};
const styles = {
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      background: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    inputGroup: {
      marginBottom: '15px',
      textAlign: 'left',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#1e90ff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '10px',
    },
    message: {
      marginTop: '20px',
      fontSize: '16px',
      color: '#1e90ff',
    }
  };
  
export default CreateOrder;
