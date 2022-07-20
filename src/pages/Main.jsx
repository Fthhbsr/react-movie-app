import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContextProvider";
import { toast } from "react-hot-toast";
import axios from "axios";

const Main = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([]);
  const [control, setControl] = useState(true);
  const { currentUser } = useMovieContext();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
  const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
  //console.log(movies);

  useEffect(() => {
    !movies[0] && getMovies();
  });

  const getMovies = async () => {
    try {
      const { data } = await axios.get(url);
      setMovies(data.results);
      setControl(!control);
      console.log(data);
      console.log(currentUser);
    } catch (error) {
      console.log(error);
    }
  };

  const searchMovies = async (searchMovie) => {
    try {
      const { data } = await axios.get(`${searchUrl}${searchMovie}`);
      setMovies(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      searchMovies(searchMovie);
      setSearchMovie("");
    } else {
      toast.error("Please Login to Search for the movie...");
    }
  };

  return (
    <div className="main-container">
      <div className="container w-50">
        <form
          className="row p-3 my-2 justify-content-center bg-secondary rounded"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className=" col-auto">
            <input
              type="text"
              placeholder="Search"
              className="form-control rounded"
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              required
            />
          </div>
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-warning text-dark col-auto"
            >
              Search a movie...
            </button>
          </div>
        </form>
      </div>
      <div className="row gap-3 justify-content-center">
        {movies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Main;
