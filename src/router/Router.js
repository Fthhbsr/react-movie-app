import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { useMovieContext } from "../context/MovieContextProvider";
import Login from "../pages/Login";
import Main from "../pages/Main";
import MovieDetail from "../pages/MovieDetail";
import Register from "../pages/Register";

const PrivateRouter = () => {
  const { currentUser } = useMovieContext();

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="moviedetail/:id" element={<MovieDetail />} /> */}
        <Route path="/moviedetail" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
