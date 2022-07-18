import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContextProvider";

const Main = () => {
  const { movies } = useMovieContext();
  console.log(movies);

  return (
    <div>
      <div className=" container ">
        <form className="row p-4 justify-content-center">
          <div className=" col-auto">
            <input
              type="text"
              placeholder="Search"
              className="form-control rounded"
            />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary ms-2 col-auto">
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
