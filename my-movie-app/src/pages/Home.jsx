import { useEffect, useState } from "react";
import axios from "axios";
import { useGlobal } from "../context/GlobalContext";

import MovieList from "../components/MovieList";

export default function Home() {

  const [movies, setMovies] = useState([]);
  const { setIsLoading } = useGlobal();

  const loadingFalse = () => {
    setIsLoading(false);
  }

  useEffect(() => {

    setIsLoading(true);

    axios
      .get("http://localhost:3000/api/movies")
      .then((res) => {
        console.log(res.data);
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(loadingFalse, 2000);
      });

  }, []);

  return (
    <div className="container py-4">

      <h1 className="mb-4">
        Movie List
      </h1>

      <MovieList movies={movies} />

    </div>
  );
}