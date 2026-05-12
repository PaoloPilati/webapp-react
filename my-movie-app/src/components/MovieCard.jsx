import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            {movie.title}
          </h5>
          <p className="card-text">
            {movie.director}
          </p>
          <div className="mt-auto">
            <Link to={`/movies/${movie.id}`} className="btn btn-primary">
              Details
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}