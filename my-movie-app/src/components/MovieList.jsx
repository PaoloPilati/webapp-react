import MovieCard from "./movieCard";

export default function MovieList({ movies }) {
  return (
    <div className="row">
      {movies.map(m => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  );
}