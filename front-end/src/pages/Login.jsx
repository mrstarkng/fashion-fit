import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4">
      {/* Title Section */}
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Input Fields */}
      {currentState === 'Sign Up' && (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800 rounded placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
          placeholder="Name"
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 rounded placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Email"
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 rounded placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Password"
      />

      {/* Forgot Password and Toggle State */}
      <div className="w-full flex justify-between text-sm mt-2">
        <p className="cursor-pointer text-gray-600 hover:text-gray-800">Forgot Password?</p>
        {currentState === 'Login' ? (
          <p
            onClick={() => setCurrentState('Sign Up')}
            className="cursor-pointer text-gray-600 hover:text-gray-800"
          >
            New User? Create an account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState('Login')}
            className="cursor-pointer text-gray-600 hover:text-gray-800"
          >
            Already have an account? Login
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition-all duration-200"
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
