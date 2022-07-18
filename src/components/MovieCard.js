import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMovieContext } from "../context/MovieContextProvider";

const MovieCard = ({ movie }) => {
  const { setMovieDetail } = useMovieContext();
  const { id, title, poster_path, overview } = movie;
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const imgUrl = "https://image.tmdb.org/t/p/w500";
  const handleClick = () => {
    navigate(`/moviedetail`);
    setMovieDetail(movie);
  };
  return (
    <div
      className="card col-sm-6 col-md-4 col-lg-3  movie"
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => handleClick()}
    >
      <img
        src={`${imgUrl}${poster_path}`}
        className="card-img-top rounded"
        alt={title}
      />
      {show && (
        <div className="overview me-3 rounded ">
          <h5 className="card-title">Overview</h5>
          <p className="card-text">{overview}</p>
        </div>
      )}

      <div className="card-body row align-items-center justify-content-between">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default MovieCard;
