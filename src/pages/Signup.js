import React, { useState } from 'react';
import './Signup.css';

function Signup() {
  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  });

  const handleChangeSignUp = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div className="sign-up-page">
      <h1>SIGN UP</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={signUpData.firstName}
          onChange={handleChangeSignUp}
          required
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={signUpData.lastName}
          onChange={handleChangeSignUp}
          required
        />
        <label htmlFor="emailAddress">Email Address</label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={signUpData.emailAddress}
          onChange={handleChangeSignUp}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={signUpData.password}
          onChange={handleChangeSignUp}
          required
        />
        <label>
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          Remember me
        </label>
        <button type="submit">SIGN UP</button>
      </form>
      <div className="sign-up-or">
        <span>OR</span>
      </div>
      <div className="sign-up-options">
        <a href="#" className="sign-up-social facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="sign-up-social google">
          <i className="fab fa-google"></i>
        </a>
      </div>
      <p>
        Already have an Account?{' '}
        <a href="#" className="sign-in">
          SIGN IN
        </a>
      </p>
    </div>
  );
}

export default Signup;
