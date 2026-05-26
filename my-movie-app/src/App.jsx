import { Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import AddMoviePage from "./pages/AddMoviePage";
import MovieDetails from "./pages/MovieDetails";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies/create" element={<AddMoviePage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFoundPage />} />

      </Route>
    </Routes>
  );
}

export default App;