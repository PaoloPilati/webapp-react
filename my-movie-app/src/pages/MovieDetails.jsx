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
      <div className="text-center mb-4">
        <img
          src={movie.image}
          alt={movie.title}
          className="img-fluid rounded shadow-sm"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="mt-3">
          {movie.title}
        </h1>
        <p className="py-3">
          Director: {movie.director}
        </p>
      </div>
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