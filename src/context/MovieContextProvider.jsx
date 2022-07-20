import { createContext, useContext, useEffect, useState } from "react";
import { userInfoChanged } from "../auth/firebase";

//? 1- Defining
export const MovieContext = createContext();

//? 3-Consume function (Custom Hook)
export const useMovieContext = () => {
  return useContext(MovieContext);
};

//? 2- Provider Component
const MovieContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    userInfoChanged(setCurrentUser);
  }, []);

  const values = {
    currentUser,
    setCurrentUser,
    movieDetails,
    setMovieDetails,
  };

  return (
    <MovieContext.Provider value={values}>{children}</MovieContext.Provider>
  );
};

export default MovieContextProvider;
