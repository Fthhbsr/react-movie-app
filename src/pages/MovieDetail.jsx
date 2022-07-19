//import { useLocation } from "react-router-dom";
import { useMovieContext } from "../context/MovieContextProvider";
import noPhoto from "../assets/noPhoto.jpg";

const MovieDetail = () => {
  const { movieDetail } = useMovieContext();

  const { title, poster_path, overview, vote_average } = movieDetail;
  let imgUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    // <div>
    //   <h1>{title}</h1>
    //   <img
    //     src={`${imgUrl}${poster_path}`}
    //     className="card-img-top rounded"
    //     alt={title}
    //   />
    //   <p>{overview}</p>
    // </div>
    <div className="card my-3 mx-auto" style={{ maxWidth: "70vw " }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={poster_path ? imgUrl : noPhoto}
            className="img-fluid rounded-start"
            alt={title}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body detail-card-body">
            <h5 className="card-title">{title.toUpperCase()}</h5>
            <p className="card-text">{overview}</p>
            <p>
              <button className="btn btn-warning me-3">{vote_average}</button>
              <button className="btn btn-primary">GO BACK</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
