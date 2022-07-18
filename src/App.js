import "./App.css";
import MovieContextProvider from "./context/MovieContextProvider";
import Router from "./router/Router";

function App() {
  return (
    <MovieContextProvider>
      <Router />
    </MovieContextProvider>
  );
}

export default App;
