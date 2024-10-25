import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
      <div style={styles.container}>
        <h1>Welcome to the Package Tracking System</h1>
        <p>This system is designed for business owners</p>
        
        <Link to="/create-order">
          <button 
            style={styles.button} 
            onMouseEnter={(e) => e.target.style.backgroundColor = '#123864'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1864bc'}
          >
            Create New Order
          </button>
        </Link>
        
        <Link to="/my-orders">
          <button 
            style={styles.button} 
            onMouseEnter={(e) => e.target.style.backgroundColor = '#123864'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#1864bc'}
          >
            My Orders
          </button>
        </Link>
      </div>
    );
  }
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
  button: {
    padding: '8px', 
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#1864bc',  
    color: 'white',
    fontSize: '14px',
    cursor: 'pointer',
    margin: '10px auto',
    width: '80%',
  },
};
export default HomePage;
