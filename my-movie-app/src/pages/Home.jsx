import { useEffect, useState } from "react";
import axios from "axios";

import MovieList from "../components/MovieList";

export default function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((res) => { console.log(res.data);
                    setMovies(res.data);})
      .catch((err) => {console.log(err);});
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