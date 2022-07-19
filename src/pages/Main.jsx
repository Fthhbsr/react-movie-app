import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContextProvider";
import { toast } from "react-hot-toast";

const Main = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const { movies, isLoggedIn, searchMovies, getMovies } = useMovieContext();
  //console.log(movies);

  useEffect(() => {
    !movies && getMovies();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLoggedIn) {
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
