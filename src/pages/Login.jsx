import { useEffect, useState } from "react";
import { signIn, signInWithGoogle } from "../auth/firebase";
import { useMovieContext } from "../context/MovieContextProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useMovieContext();
  const navigate = useNavigate();

  useEffect(() => {
    loginNavigate();
  }, [isLoggedIn]);

  const loginNavigate = () => {
    isLoggedIn && navigate("/");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, setIsLoggedIn);
    setEmail("");
    setPassword("");
    // loginNavigate();
  };

  const handleLoginGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle(setIsLoggedIn);
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="container mt-5 flex-column text-center "
      style={{ width: "400px" }}
    >
      <h1 className="text-dark mb-5">LOGIN</h1>
      <form>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary mb-3 w-100"
            onClick={(e) => handleLogin(e)}
          >
            LOGIN
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={(e) => handleLoginGoogle(e)}
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
