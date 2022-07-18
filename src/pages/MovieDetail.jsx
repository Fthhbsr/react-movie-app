//import { useLocation } from "react-router-dom";
import { useMovieContext } from "../context/MovieContextProvider";

const MovieDetail = () => {
  const { movieDetail } = useMovieContext();

  const { title, poster_path, overview } = movieDetail;
  const imgUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <h1>{title}</h1>
      <img
        src={`${imgUrl}${poster_path}`}
        className="card-img-top rounded"
        alt={title}
      />
      <p>{overview}</p>
    </div>
  );
};

export default MovieDetail;
