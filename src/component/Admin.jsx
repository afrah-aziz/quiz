import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from './quiz.avif';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate(); // Import useNavigate from 'react-router-dom'

  const handleLogin = () => {
    if (username === 'Afrah' && password === 'afrah') {
      setError('');
      setLoggedIn(true);
      // Successful login
      // You can add additional logic here
    } 
   else if (username === 'Question' && password === 'question') {
      setError('');
      setLoggedIn(true);
      setUsername("");
      setPassword("");
      navigate("/question");
      // Successful login
      // You can add additional logic here
    }
    else if (username === 'Chefs' && password === 'chefs') {
      setError('');
      setLoggedIn(true);
      navigate("/chefs");
      setUsername("");
      setPassword("");
      // Successful login
      // You can add additional logic here
    }
    else {
      setError('Invalid username or password');
    }
    if (username === 'Afrah' && password === 'afrah') {
      setError('');
      setLoggedIn(true);
      setUsername("");
      setPassword("");
      // Successful login
      // You can add additional logic here
    } else {
      setError('Invalid username or password');
    }
  };

  

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ textAlign: 'center', marginTop: '5px' }}>
  <h1 style={{ color: 'black', fontSize: '70px', fontFamily: 'cursive', marginBottom: '20px' }}>Admin Login</h1><br/><br/>
  <input
    type="text"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    style={{
      width: '280px',
      height: '40px',
      backgroundColor:'lightcyan',
      borderColor:'black',
      borderRadius: '50px', // Oval shape
      paddingLeft: '20px', // Add padding for a better look
      marginBottom: '20px',
    }}
  /><br /><br />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    style={{
      width: '280px',
      height: '40px',
      backgroundColor: 'lightcyan',
      borderColor:'black',

      borderRadius: '50px', // Oval shape
      paddingLeft: '20px', // Add padding for a better look
      marginBottom: '20px',
    }}
  /><br /><br />
  {loggedIn ? (
    navigate('/order') // Use navigate for redirection
  ) : (
    <button
      onClick={handleLogin}
      style={{
        width: '150px',
        height: '40px',
        backgroundColor: 'cyan',
        borderRadius: '50px', // Oval shape
        color: 'white', // Text color
        fontSize: '20px', // Text size
        fontWeight: 'bold', // Text weight
        border: 'none', // Remove border
        cursor: 'pointer', // Add pointer cursor on hover
      }}
    >
      Login
    </button>
  )}
  {error && (
    <div>
      <p style={{ color: 'red' }}>{error}</p>
      <button onClick={() => setError('')}>OK</button>
    </div>
  )}
</div>

    </div>
  );
}
