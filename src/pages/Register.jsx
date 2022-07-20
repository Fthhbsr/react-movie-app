import { useState } from "react";
import { createUser } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    createUser(email, password, navigate);
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="container mt-5 flex-column text-center "
      style={{ width: "400px" }}
    >
      <h1 className="mb-5">REGISTER</h1>
      <form onSubmit={(e) => handleClick(e)}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div>
          <button type="submit" className="btn btn-primary mb-3 w-100">
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
