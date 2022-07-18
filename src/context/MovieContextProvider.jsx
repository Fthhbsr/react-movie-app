import { createContext, useContext, useEffect, useState } from "react";

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

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const values = { movies, isLoggedIn, setIsLoggedIn };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
