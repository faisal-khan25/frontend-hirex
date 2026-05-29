
import { memo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './Navbar.css';

function Navbar() {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
    navigate('/login');
  }, [logout, navigate]);

  const dashPath = {
    JOBSEEKER: '/jobseeker/browse',
    MANAGER: '/manager/jobs',
    ADMIN: '/admin/dashboard',
  };

  return (
    <nav className="navbar">
      <div className="container nav-inner">

        {/* Logo */}
        <Link
          to="/"
          className="logo"
          aria-label="HireX Home"
        >
          Hire<span>X</span>
        </Link>

        {/* Navigation */}
        <div className="nav-links">

          {!user ? (
            <>
              <Link to="/jobs">
                Browse Jobs
              </Link>

              <Link to="/login">
                Login
              </Link>

              <Link
                to="/register"
                className="btn btn-primary btn-sm"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="nav-user-info">
                Hi, {user.name}
              </span>

              <Link to={dashPath[user.role]}>
                Dashboard
              </Link>

              <button
                type="button"
                onClick={handleLogout}
                aria-label="Logout"
              >
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}

export default memo(Navbar);

