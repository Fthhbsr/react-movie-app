import { Link } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { useMovieContext } from "../context/MovieContextProvider";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useMovieContext();

  const handleLogOut = () => {
    logOut(setIsLoggedIn);
  };

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          React Movie App
        </Link>
        {isLoggedIn ? (
          <ul className="nav nav-pills">
            <li className="nav-item">
              <h5 className="pt-1 me-2">Hoşgeldin</h5>
            </li>
            <li className="nav-item">
              <Link
                className="btn btn-secondary"
                to="/"
                onClick={() => handleLogOut()}
              >
                Logout
              </Link>
            </li>
          </ul>
        ) : (
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
