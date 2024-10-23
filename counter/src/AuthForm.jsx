import React, { useState } from "react";
import "./AuthForm.css"; // Import the necessary CSS file

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup

  const toggleForm = () => {
    setIsLogin(!isLogin); // Switch between login and signup
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        {isLogin ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};

const LoginForm = () => {
  return (
    <form className="auth-form">
      <h2>Login Form</h2>
      <input type="email" placeholder="Email Address" required />
      <input type="password" placeholder="Password" required />
      <a href="#" className="forgot-password">Forgot password?</a>
      <button type="submit" className="auth-button">Login</button>
      <p>Not a member? <a href="#" onClick={() => alert('Go to Signup')}>Signup now</a></p>
    </form>
  );
};

const SignupForm = () => {
  return (
    <form className="auth-form">
      <h2>Signup Form</h2>
      <input type="email" placeholder="Email Address" required />
      <input type="password" placeholder="Password" required />
      <input type="password" placeholder="Confirm password" required />
      <button type="submit" className="auth-button">Signup</button>
    </form>
  );
};

export default AuthForm;
