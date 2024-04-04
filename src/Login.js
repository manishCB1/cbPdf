// Login.jsx
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css"; // Import the CSS file

function Login() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields");
    } else if (
      formData.email === "cbadmin@gmail.com" &&
      formData.password === "cbadmin@2019"
    ) {
      // Credentials are correct, navigate to dashboard
      console.log("Login successful");
      history.push("/dashboard");
    } else {
      // Incorrect credentials
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <div className="left">
        <div className="login-section">
          <header>
            <h2 className="animation a1">CB OFFICE </h2>
            <h4 className="animation a2">Welcome back, Admin Login Only</h4>
          </header>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="input-field animation a3"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-field animation a4"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <p className="animation a5">
              <a href="#">Forgot password?</a>
            </p>
            <button type="submit" className="animation a6">
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Login;
