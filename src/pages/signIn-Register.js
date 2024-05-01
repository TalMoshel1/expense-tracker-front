import React, { useState } from "react";
import axios from "axios";

const SignInPage = () => {
  const [signInData, setSignInData] = useState({ email: "", password: "" });

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/users/get`,
        signInData
      );
      sessionStorage.setItem('token',response.data.token)
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleChangeSignIn = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={signInData.email}
        onChange={handleChangeSignIn}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={signInData.password}
        onChange={handleChangeSignIn}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignInPage;
