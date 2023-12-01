import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router';
import { Heading, Button } from '@chakra-ui/react';

const Login = () => {
  // State variables for username, password, registration status, and login error
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [loginError, setLoginError] = useState('');

  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Function to handle user registration
  const handleRegister = () => {
    // Check if the user is already registered
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    if (registeredUsers.some(user => user.username === username)) {
      setLoginError('Username already exists. Please choose a different username.');
    } else {
      // Register the user by updating localStorage
      registeredUsers.push({ username, password });
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
      
      // Show success message and update registration status
      alert("Registered Successfully");
      setIsRegistered(true);
      setLoginError('');
    }
  };

  // Function to handle user login
  const handleLogin = () => {
    // Check if the user is registered
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const user = registeredUsers.find(u => u.username === username && u.password === password);

    if (user) {
      // Perform login logic, e.g., redirect to another page
      setLoginError('');
      alert(`${user.username} Login Successfully`);
      navigate('/');
      console.log(user);
    } else {
      // Show login error message
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className='Box'>
      {/* Heading for login or signup */}
      <Heading>{isRegistered ? 'Login' : 'Signup'}</Heading>

      {/* Form for entering username and password */}
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />

        {/* Button for login or signup based on registration status */}
        <Button colorScheme="green" type="button" onClick={isRegistered ? handleLogin : handleRegister}>
          {isRegistered ? 'Login' : 'Signup'}
        </Button>

        {/* Display login error message if any */}
        <p style={{ color: 'red' }}>{loginError}</p>
      </form>

      {/* Switch between login and signup */}
      <p>
        {isRegistered ? "Don't have an account? " : 'Already have an account? '}
        <Button type="button" onClick={() => setIsRegistered(!isRegistered)}>
          {isRegistered ? 'Signup' : 'Login'}
        </Button>
      </p>
    </div>
  );
};

export default Login;
