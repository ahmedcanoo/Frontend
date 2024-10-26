import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
  
    return (
      <div style={styles.pageContainer}>
        <nav style={styles.navbar}>
          <div style={styles.navbarContent}>
            <h2 style={styles.logo}>PTS</h2>
  
            <div
              style={styles.dropdown}
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <button style={styles.dropdownButton}>Services</button>
              {isDropdownVisible && (
                <div style={styles.dropdownContent}>
                  <Link
                    to="/create-order"
                    style={{
                      ...styles.dropdownLink,
                      ...(hoveredLink === 'create-order' ? styles.dropdownLinkHover : {}),
                    }}
                    onMouseEnter={() => setHoveredLink('create-order')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    Create Order
                  </Link>
                  <Link
                    to="/my-orders"
                    style={{
                      ...styles.dropdownLink,
                      ...(hoveredLink === 'my-orders' ? styles.dropdownLinkHover : {}),
                    }}
                    onMouseEnter={() => setHoveredLink('my-orders')}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    My Orders
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
  
        <div style={styles.container}>
          <h1>Welcome to the Package Tracking System</h1>
          <p>This system is designed for business owners</p>
        </div>
      </div>
    );
  }
  
  
const styles = {
    pageContainer: {
      minHeight: '100vh',
      width: '100vw',
      overflowX: 'hidden',
    },
    navbar: {
      width: '100%',
      backgroundColor: '#1864bc',
      padding: '8px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white',
    },
    navbarContent: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between',
      paddingRight: '75px',
    },
    logo: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: 'white',
      margin: '0',
    },
    dropdown: {
      position: 'relative',
      display: 'inline-block',
    },
    dropdownButton: {
      backgroundColor: '#1864bc',
      color: 'white',
      border: 'none',
      padding: '8px 12px',
      fontSize: '14px',
      cursor: 'pointer',
      borderRadius: '4px',
    },
    dropdownContent: {
      position: 'absolute',
      backgroundColor: '#f9f9f9',
      minWidth: '160px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
      zIndex: 1,
      borderRadius: '4px',
    },
    dropdownLink: {
      color: '#333',
      padding: '10px 16px',
      textDecoration: 'none',
      display: 'block',
      transition: 'background-color 0.3s ease', 
    },
    dropdownLinkHover: {
      backgroundColor: '#e0e0e0', 
    },
    container: {
      maxWidth: '600px',
      margin: '40px auto',
      padding: '20px',
      textAlign: 'center',
      background: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
  };
  
  export default HomePage;
  
