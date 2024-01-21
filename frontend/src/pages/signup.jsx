
import React from 'react';

const signup= () => {
  const handleSignupOrganization = () => {
    // Redirect or perform organization signup logic
    alert('Redirect to organization signup page or perform organization signup logic.');
  };

  const handleSignupUser = () => {
    // Redirect or perform user signup logic
    alert('Redirect to user signup page or perform user signup logic.');
  };

  return (
    <div>
      <h1>Signup Page</h1>

      <button onClick={handleSignupOrganization}>Signup as Organization</button>
      <button onClick={handleSignupUser}>Signup as User</button>
    </div>
  );
};

export default signup;
