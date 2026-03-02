import React from "react";
import "../auth-style.scss";

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your account</p>
        </div>

        <form className="auth-form">
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
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Sign In
          </button>
        </form>

        <div className="auth-link">
          <p>
            Don't have an account? <a href="/auth/register">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
