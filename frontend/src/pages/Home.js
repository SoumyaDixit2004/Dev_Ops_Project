import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="static-page">
      {/* Hero Section */}
      <div className="hero">
        <h1>
          Welcome to <span>ExpensePro</span> 💳
        </h1>

        <p>
          Manage your income, expenses, and savings with a modern dashboard,
          analytics, and secure login system.
        </p>

        <div className="hero-buttons">
          <Link to="/dashboard" className="btn-primary">
            Go to Dashboard    
          </Link>

          <Link to="/register" className="btn-secondary">
            Create Account   
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <h2>✨ Key Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>📊 Smart Analytics</h3>
            <p>View income vs expense breakdown with charts.</p>
          </div>

          <div className="feature-card">
            <h3>🔐 Secure Login</h3>
            <p>JWT Authentication ensures your data stays private.</p>
          </div>

          <div className="feature-card">
            <h3>💰 Monthly Reports</h3>
            <p>Track spending habits and plan better finances.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
