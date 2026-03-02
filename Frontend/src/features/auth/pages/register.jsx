import React from "react";
import "../auth-style.scss";

const Register = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join us and get started</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-input"
              placeholder="Choose a username"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Create a password"
              required
              minLength="6"
            />
          </div>

          <button type="submit" className="submit-btn">
            Create Account
          </button>
        </form>

        <div className="auth-link">
          <p>
            Already have an account? <a href="/auth/login">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
