import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import ReviewList from "../components/ReviewList";

export default function MovieDetails() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => {setMovie(res.data);})
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container py-4">
      <h1>{movie.title}</h1>
      <p>
        Director: {movie.director}
      </p>
      <p>
        Genre: {movie.genre}
      </p>
      <p>
        {movie.abstract}
      </p>
      <h3>Reviews</h3>
      <ReviewList reviews={movie.reviews} />
    </div>
  );
}