import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">💳 ExpensePro</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Signup</Link>

      </div>
    </nav>
  );
}

export default Navbar;
