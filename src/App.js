import { Toaster } from "react-hot-toast";
import "./App.css";
import MovieContextProvider from "./context/MovieContextProvider";
import Router from "./router/Router";

function App() {
  return (
    <MovieContextProvider>
      <Toaster position="top-right" reverseOrder={true} />
      <Router />
    </MovieContextProvider>
  );
}

export default App;
