// Password entry and authentication component

import React, { useState } from 'react';

function Login({ onAuthenticated }) {
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:3001/admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body : {"password" : {password}}
    });
    if (response.ok) {
      onAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
