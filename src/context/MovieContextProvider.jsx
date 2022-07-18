import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

//? 1- Defining
export const MovieContext = createContext();

//? 3-Consume function (Custom Hook)
export const useMovieContext = () => {
  return useContext(MovieContext);
};

//? 2- Provider Component
const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movieDetail, setMovieDetail] = useState([]);

  // const API_KEY = process.env.REACT_APP_API_KEY;
  const API_KEY = "5ef3e0346140c3030165961c9a1dad82";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

  const getMovies = async () => {
    try {
      const { data } = await axios.get(url);
      setMovies(data.results);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const values = {
    movies,
    isLoggedIn,
    setIsLoggedIn,
    movieDetail,
    setMovieDetail,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
