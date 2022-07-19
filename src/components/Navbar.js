import { Link } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { useMovieContext } from "../context/MovieContextProvider";
import iconVendetta from "../assets/iconVendetta.svg";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, getMovies } = useMovieContext();

  const handleLogOut = () => {
    logOut(setIsLoggedIn);
  };

  return (
    <nav className="container navbar navbar-dark bg-warning rounded p-2 mt-1">
      <div className="container p-2">
        <Link
          className="navbar-brand text-dark column justify-content-center"
          onClick={() => getMovies()}
          to="/"
        >
          <img
            src={iconVendetta}
            className="me-2 mb-2"
            style={{ width: "2rem" }}
            alt="icon"
          />
          <h2 className="d-inline">Vendetta Movie App</h2>
        </Link>
        {isLoggedIn ? (
          <ul className="nav nav-pills">
            <li className="nav-item">
              <h5 className="pt-1 me-2">Welcome to Movie App</h5>
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
