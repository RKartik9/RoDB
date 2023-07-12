import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/home";
import MovieList from "./components/movieList/movieList";
import Movie from "./pages/movieDetail/movie";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route
            path="/*"
            element={
              <h1 className="text-4xl text-center p-10 text-red-700">
                {" "}
                Error 404: Page not found{" "}
              </h1>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
