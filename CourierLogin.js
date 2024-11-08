import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CourierLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      const response = await axios.post('http://localhost:8001/api/login-courier', formData);
      const { message, username } = response.data;

      setMessage(message);
      setFormData({ email: '', password: '' });

      // Store the username in localStorage (no need to store userId)
      localStorage.setItem('username', username);

      // Redirect to the home page after successful login
      navigate('/home');
    } catch (error) {
      console.error(error);
      setMessage('Login failed');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CourierLogin;
