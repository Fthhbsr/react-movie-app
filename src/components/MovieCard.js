import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../context/MovieContextProvider";
import noPhoto from "../assets/noPhoto.jpg";
import { toast } from "react-hot-toast";

const MovieCard = ({ movie }) => {
  const { setMovieDetails, currentUser } = useMovieContext();
  const { title, poster_path, overview, vote_average } = movie;
  const navigate = useNavigate();

  let imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  const handleClick = () => {
    if (currentUser) {
      navigate(`/moviedetail`);
      setMovieDetails(movie);
      console.log(currentUser);
    } else {
      toast.error("Please Login to see the detail page...");
      navigate("/login");
    }
  };
  return (
    <div
      className="card col-sm-6 col-md-4 col-lg-3 movie-card"
      onClick={() => handleClick()}
    >
      <div className="movie">
        <img
          src={poster_path ? imgUrl : noPhoto}
          className="card-img-top rounded"
          alt={title}
        />

        <div className="overview  rounded ">
          <h5 className="card-title">Overview</h5>
          <p className="card-text">{overview}</p>
        </div>
      </div>

      <div className="card-body movie-cards-body">
        <h5>{title}</h5>

        {currentUser && (
          <button className="btn btn-warning">{vote_average}</button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
