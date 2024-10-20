import React from 'react';

function HomePage() {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Package Tracking System</h1>
      <p>
        This system is designed for business owners who sell products through platforms like Facebook or Instagram.
      </p>
      <p>
        After receiving an order, you can hand over the package to a delivery courier along with the delivery fee and the customer’s address. 
        The courier will then communicate with the customer to arrange the delivery of the package.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Track packages in real-time.</li>
        <li>Communicate with couriers directly.</li>
        <li>Manage delivery fees and customer addresses.</li>
      </ul>
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
};

export default HomePage;
