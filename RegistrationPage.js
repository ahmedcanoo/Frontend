import React from 'react';
import RegistrationForm from './RegistrationForm';

function RegistrationPage() {
  return (
    <div>
      <h1>User Registration</h1>
      <RegistrationForm />
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
}

export default RegistrationPage;
