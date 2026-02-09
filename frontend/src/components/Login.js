import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      alert("✅ Login Successful!");

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (error) {
      alert("❌ Login Failed: Invalid Credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">🔐 Login</h2>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={loginUser}>Login</button>

        <p className="auth-text">
          Don’t have an account?{" "}
          <Link to="/register" className="link-text">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
