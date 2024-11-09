import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CourierRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    vehicleType: '', 
    plateNumber: '', 
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8001/api/register-courier', formData);
      setMessage(response.data); 
      setFormData({
        name: '',
        email: '',
        phone: '',
        password: '',
        vehicleType: '',
        plateNumber: '',
      }); 
      navigate('/login-courier');
      
    } catch (error) {
      console.error(error);
      setMessage('Failed to register courier'); 
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Vehicle Type:</label>
          <select name="vehicleType" value={formData.vehicleType} onChange={handleChange} required>
            <option value="">Select Vehicle Type</option>
            <option value="Car">Car</option>
            <option value="Van">Van</option>
          </select>
        </div>
        <div>
          <label>Plate Number:</label>
          <input type="text" name="plateNumber" value={formData.plateNumber} onChange={handleChange} required />
        </div>
        <button type="submit">Register Courier</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CourierRegistrationForm;
