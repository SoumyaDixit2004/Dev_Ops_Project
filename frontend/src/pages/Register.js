import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });

      alert("✅ Signup Successful! Please Login.");

      // Redirect to login page
      navigate("/login");
    } catch (error) {
      alert("❌ Signup Failed: " + error.response.data.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>📝 Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button onClick={registerUser}>Signup</button>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="link-text">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
