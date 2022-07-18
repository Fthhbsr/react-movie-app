import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          React Movie App
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="btn btn-secondary me-2" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-secondary" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
