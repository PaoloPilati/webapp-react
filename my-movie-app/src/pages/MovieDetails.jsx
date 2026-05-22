import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";

export default function MovieDetails() {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const fetchMovie = () => {
    axios
      .get(`http://localhost:3000/movies/${id}`)
      .then((res) => {setMovie(res.data);})
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(fetchMovie, []);
    

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <img
          src={movie?.image}
          alt={movie.title}
          className="img-fluid rounded shadow-sm"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="mt-3">
          {movie?.title}
        </h1>
        <p className="py-3">
          Director: {movie?.director}
        </p>
      </div>
      <p>
        Genre: {movie?.genre}
      </p>
      <p>
        {movie?.abstract}
      </p>
      <h3>Reviews</h3>
      <ReviewList reviews={movie?.reviews} />
      {movie?.id && <ReviewForm movie_id={movie.id} refreshReviews={fetchMovie} />}
    </div>
  );
}