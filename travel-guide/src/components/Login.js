import React from "react";

import "./Login.css"; // You can style it in this CSS file

function Login() {
  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Sign In</h1>
      </header>

      <div className="login-form">
        <input type="text" placeholder="Username" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-button">Login</button>
      </div>

      <div className="login-options">
        <p>
          Don’t have an account? <span>Signup</span>
        </p>
        <p>
          Logging in as a guest? <span>Sign in with:</span>
        </p>

        <div className="social-buttons">
          <button className="social-login google">Continue with Google</button>
          <button className="social-login apple">Continue with Apple</button>
          <button className="social-login facebook">
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
