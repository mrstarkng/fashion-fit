import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // For error messages

  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(''); // Reset error message

    try {
      // Example: Log email and password to console (replace with API call)
      console.log('Email:', email, 'Password:', password);

      // Simulate API request
      const response = await fetch('http://127.0.0.1:5000/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Save token or handle successful login
      localStorage.setItem('token', data.token);

      // Redirect or handle navigation after successful login
      window.location.href = '/dashboard';

    } catch (err) {
      console.error('Login failed:', err);
      setError(err.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        {error && <p className='text-red-500 text-sm mb-4'>{error}</p>}
        <form onSubmit={onSubmitHandler}>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
              type='email'
              placeholder='your@email.com'
              required
            />
          </div>
          <div className='mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
              type='password'
              placeholder='Enter your password'
              required
            />
          </div>
          <button type='submit' className='bg-gray-900 text-white rounded-md px-4 py-2'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
